import React, { useState } from 'react';
import { createTangetNumberButtons, createModifierButtons, getRandomFromRange } from '../../helpers/helperFunctions';
import StyledModal from './Modal.styled';

const Modal = ({handleRemove, handleCancel, showRemoveContent, showStatTestContent, soldierData, statToBeTested}) => {
	const [chosenTN, setChoseTN] = useState(0);
	const [chosenModifier, setChoseModifier] = useState(0);
	const [wasTestSuccessful, setWasTestSuccessful] = useState(undefined);
	const [randomNumber, setRandomNumber] = useState(undefined);
	const targetNumbersButtons = createTangetNumberButtons(chosenTN);
	const modifierNumberButtons = createModifierButtons(chosenModifier);

	const handleButtonClick = e => {
		const modifier = parseInt(e.target.dataset.modifier || 0);
		const number = parseInt(e.target.dataset.number || 0);
		setRandomNumber(undefined);
		if (modifier) setChoseModifier(modifier);
		if (number) setChoseTN(number);
	}

	const performStatTest = e => {
		const diceThrow = getRandomFromRange(20, 1);
		const statValue = parseInt(statToBeTested.value);
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
			<h3><strong>{statToBeTested.stat} {statToBeTested.value}</strong> test</h3>
			<div className='modal-close' onClick={handleCancel}>&times;</div>
			<div className='test-settings'>
				<div className='target-numbers-and-modifiers'>
					<strong className='title'>choose Target Number</strong>
					<div className='target-numbers' onClick={handleButtonClick}>
						{targetNumbersButtons}
					</div>
					<strong className='title'>add Modifier?</strong>
					<div className='modifiers' onClick={handleButtonClick}>
						{modifierNumberButtons}
					</div>
					<strong className='test-chosen-values'>
						<span>{chosenTN ? `${statToBeTested.stat}: ${statToBeTested.value}` : ''}</span>
						<span>{chosenTN ? `TN: ${chosenTN}` : ''}</span>
						{chosenModifier ? <span>modifier: {chosenModifier > 0 ? '+' : ''}{chosenModifier}</span> : ''}
					</strong>
					<strong className={`test-results ${getTestResultText()}`}>
						<span>{randomNumber ? `sum: ${chosenTN + chosenModifier + randomNumber}` : ''}</span>
						<span>{randomNumber && (wasTestSuccessful ? '>=' : '<')}</span>
						<span>{randomNumber ? `dice: ${randomNumber}` : ''}</span>
						<span>{randomNumber && ` === result: ${getTestResultText()?.toUpperCase()}`}</span>
					</strong>
				</div>

				{/* <div className='combat-settings-and-result'></div>
				<div className='combat-oponent-settings'></div> */}
			</div>
			<div className='buttons'>
				<button className='success' disabled={!chosenTN} onClick={performStatTest}>Test Stat</button>
				<button className='danger' disabled={!chosenTN} onClick={performStatTest} data-close={true}>Test and Close</button>
				<button className='info' onClick={handleCancel}>Cancel</button>
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