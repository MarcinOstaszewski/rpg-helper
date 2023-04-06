import React, { useState } from 'react';
import { createTangetNumberButtons, createModifierButtons, getRandomFromRange, createOpponentFightButtons } from '../../helpers/helperFunctions';
import { FiArrowRight } from 'react-icons/fi';
import StyledModal from './Modal.styled';

const Modal = ({handleRemove, handleCancel, showRemoveContent, showStatTestContent, soldierData, statToBeTested}) => {
	const [chosenTN, setChoseTN] = useState(0);
	const [chosenModifier, setChoseModifier] = useState(0);
	const [wasTestSuccessful, setWasTestSuccessful] = useState(undefined);
	const [randomNumber, setRandomNumber] = useState(undefined);
	const [opponentFight, setOpponentFight] = useState(undefined);
	const [opponentModifier, setOpponentModifier] = useState(undefined);
	const statValue = parseInt(statToBeTested.value);
	const targetNumbersButtons = createTangetNumberButtons(chosenTN);

	const handleButtonClick = e => {
		const targetNumber = parseInt(e.target.dataset.targetNumber || 0);
		const yourModifier = parseInt(e.target.dataset.modifier || 0);
		const newOpponentFight = parseInt(e.target.dataset.opponentFight || 0);
		const newOpponentModifier = parseInt(e.target.dataset.opponentModifier || 0);
		setRandomNumber(undefined);
		if (yourModifier) setChoseModifier(yourModifier);
		if (targetNumber) setChoseTN(targetNumber);
		if (newOpponentModifier) setOpponentModifier(newOpponentModifier);
		if (newOpponentFight) setOpponentFight(newOpponentFight);
	}

	const performStatTest = e => {
		const diceThrow = getRandomFromRange(20, 1);
		const testSuccessful = ((statValue + chosenModifier + diceThrow) >= chosenTN) ? true : false;
		setWasTestSuccessful(testSuccessful);
		setRandomNumber(diceThrow);
		if (e.target.dataset.close) {
			setTimeout(() => handleCancel(), 750);
		};
	}

	const removeSoldierContent = showRemoveContent && (
		<div className='remove-soldier content-container'>
			<h3>Are you sure you want to</h3>
			<div className='soldier-name'>
				remove soldier: {soldierData.index}. <span>{soldierData.name}?</span>
			</div>
			<div className='buttons'>
				<button className='danger' onClick={handleRemove}>Remove</button>
				<button className='info' onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	);

	const getTestResultText = () => {
		let text;
		if (randomNumber) {
			text = wasTestSuccessful ? 'success' : 'failure';
		}
		return text;
	}

	const statTestContent = showStatTestContent && (
		<div className='stat-test content-container'>
			<div className='modal-close' onClick={handleCancel}>&times;</div>
			<div className='test-settings'>
				<div className='target-numbers-and-modifiers'>
					<h3>Stat Test - <strong>{statToBeTested.stat} {statValue}</strong></h3>
					<strong className='title'>choose Target Number</strong>
					<div className='target-numbers' onClick={handleButtonClick}>
						{targetNumbersButtons}
					</div>
					<strong className='title'>add Modifier?</strong>
					<div className='modifiers' onClick={handleButtonClick}>
						{createModifierButtons(chosenModifier, false)}
					</div>
					<strong className='test-chosen-values'>
						<span>{chosenTN ? `${statToBeTested.stat}: ${statValue}` : ''}</span>
						<span>{chosenTN ? `TN: ${chosenTN}` : ''}</span>
						{chosenModifier ? <span>modifier: {chosenModifier > 0 ? '+' : ''}{chosenModifier}</span> : ''}
						{randomNumber ? <span>dice: {randomNumber}</span> : ''}
					</strong>
					<strong className={`test-results ${getTestResultText()}`}>
						<span>{randomNumber ? `sum: ${statValue + chosenModifier + randomNumber}` : ''}</span>
						<span>{randomNumber && (wasTestSuccessful ? '>=' : '<')}</span>
						<span>{randomNumber ? `TN: ${chosenTN}` : ''}</span>
						{(randomNumber && <span><FiArrowRight />{` result: ${getTestResultText()?.toUpperCase()}`}</span>)}
						
					</strong>
				</div>

				<div className='combat-settings'>
					<div className='combat-settings-and-modifiers'>
						<h3>Combat Roll - <strong>Fight: {statValue}</strong></h3>
						<strong className='title'>Your opponent's {statToBeTested.stat}</strong>
						<div className='combat-opponent-fight' onClick={handleButtonClick}>
							{createOpponentFightButtons(opponentFight)}
						</div>
						<strong className='title'>Your opponent's Modifier</strong>
						<div className='modifiers' onClick={handleButtonClick}>
							{createModifierButtons(opponentModifier, true)}
						</div>
					</div>
				</div>
			</div>
			<div className='buttons'>
				<button className='success' disabled={!chosenTN} onClick={performStatTest}>Test Stat</button>
				<button className='danger' disabled={!chosenTN} onClick={performStatTest} data-close={true}>Test and Close</button>
				<button className='info' onClick={handleCancel}>Close</button>
			</div>
		</div>
	)
	
	
	const modal = (
		<StyledModal showRemoveContent={showRemoveContent}>
			<div className='modal-content'>
				{removeSoldierContent}

				{statTestContent}
			</div>
		</StyledModal>
	)

  return modal
}

export default Modal