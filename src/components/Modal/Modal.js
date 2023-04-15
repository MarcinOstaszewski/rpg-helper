import React, { useState } from 'react';
import { createTangetNumberButtons, createModifierButtons, getRandomFromRange, createOpponentFightButtons,
	createOpponentArmourButtons, updateAllTestVariables, createWeaponDamageModifierButtons } from '../../helpers/helperFunctions';
import { FiArrowRight } from 'react-icons/fi';
import { TbPlus, TbMinus, TbEqual, TbMathEqualGreater, TbMathLower, TbMathGreater } from 'react-icons/tb';
import StyledModal from './Modal.styled';
import { statsEligibleForCombatTest } from '../../helpers/constants';

const Modal = ({handleRemove, handleCancel, showRemoveContent, showStatTestContent, soldierData, statToBeTested}) => {
	const yourStatValue = parseInt(statToBeTested.value);
	const [yourTN, setYourTN] = useState(0);
	const [yourModifier, setYourModifier] = useState(0);
	const [opponentArmour, setOpponentArmour] = useState(undefined);
	const [weaponDamageModifier, setWeaponDamageModifier] = useState(0);
	const [wasTestSuccessful, setWasTestSuccessful] = useState(undefined);
	const [yourDiceResult, setYourDiceResult] = useState(undefined);
	const [opponentDiceResult, setOpponentDiceResult] = useState(undefined);
	const [opponentStat, setOpponentStat] = useState(undefined);
	const [opponentModifier, setOpponentModifier] = useState(0);
	const targetNumbersButtons = createTangetNumberButtons(yourTN);
	const showCombatSettings = statsEligibleForCombatTest.includes(statToBeTested.stat);

	const handleButtonClick = e => {
		updateAllTestVariables({
			e, yourModifier, setYourModifier, yourTN, setYourTN, setYourDiceResult, setWasTestSuccessful,
			opponentModifier, setOpponentModifier, opponentStat, setOpponentStat, setOpponentDiceResult
		});
	}

	const performStatTest = e => {
		const diceThrow = getRandomFromRange(20, 1);
		const testSuccessful = ((yourStatValue + yourModifier + diceThrow) >= yourTN) ? true : false;
		setWasTestSuccessful(testSuccessful);
		setYourDiceResult(diceThrow);
		if (e.target.dataset.close) {
			setTimeout(() => handleCancel(), 750);
		};
	}

	const performCombatTest = () => {
		const yourNewDiceThrow = getRandomFromRange(20, 1);
		const opponentNewDiceThrow = getRandomFromRange(20, 1);
		setWasTestSuccessful(undefined);
		setYourDiceResult(yourNewDiceThrow);
		setOpponentDiceResult(opponentNewDiceThrow);
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

	const getResultFieldClassName = ({isCombat, yourSum, opponentSum}) => {
		if (isCombat) {
			if (yourSum() === opponentSum()) {
				return 'draw'
			} else if (yourSum() > opponentSum()) {
				return 'success';
			} else if (yourSum() < opponentSum()){
				return 'failure';
			} else {
				return 'hidden';
			}
		} else {
			if (yourTN && (yourSum() >= yourTN)) {
				return 'success';
			} else if (yourTN && (yourSum() < yourTN)) {
				return 'failure';
			} else {
				return 'hidden';
			}
		}
	}

	const handleSetOpponentArmour = e => {
		const newOpponentArmour = parseInt(e.currentTarget.dataset.opponentArmour);
		if (newOpponentArmour === opponentArmour) {
			setOpponentArmour(undefined);
		} else {
			setOpponentArmour(newOpponentArmour);
		}
	}
	const handleSetWeaponDamageModifier = e => {
		const newModifier = e.target.dataset.weaponDamageModifier
		if (newModifier === weaponDamageModifier) {
			setWeaponDamageModifier(0);
		} else {
			setWeaponDamageModifier(newModifier);
		}
	}

	const showYourResults = yourDiceResult && !opponentDiceResult;
	const yourSum = () => yourStatValue + yourModifier + yourDiceResult;
	const opponentSum = () => opponentStat + opponentModifier + opponentDiceResult;
	const getCombatResultSign = () => {
		if (yourSum() > opponentSum()) return <TbMathGreater/>;
		if (yourSum() < opponentSum()) return <TbMathLower/>;
		return < TbEqual/>;
	}

	const statTestContent = showStatTestContent && (
		<div className='stat-test content-container'>
			<div className='modal-close' onClick={handleCancel}>&times;</div>
			<div className='tests-container'>
				<div className={`target-numbers-and-modifiers ${opponentStat > -1 ? 'unfocus' : ''}`}>
					<h3>Stat Test - <strong>{statToBeTested.stat}: {yourStatValue}</strong></h3>
					<strong className='title'>choose Target Number</strong>
					<div className='target-numbers' onClick={handleButtonClick}>
						{targetNumbersButtons}
					</div>
					<strong className='title'>add Modifier?</strong>
					<div className='modifiers' onClick={handleButtonClick}>
						{createModifierButtons(yourModifier, false)}
					</div>
					<div className='display-results'>
						<div>
							<span>{statToBeTested.stat}</span>
							<span>{yourStatValue}</span>
						</div>
						<span><TbPlus/></span>
						<div>
							<span>mod</span>
							<span>{yourModifier > 0 ? '+' : ''}{yourModifier}</span>
						</div>
						<span><TbPlus/></span>
						<div>
							<span>dice</span>
							<span>{showYourResults ? yourDiceResult : '?'}</span>
						</div>
						<span> <TbEqual/> </span>
						<div className='text-bold'>
							<span>SUM</span>
							<span>{showYourResults ? yourSum() : '?'}</span>
						</div>
						<span className='text-bold'>{yourDiceResult && (wasTestSuccessful ? <TbMathEqualGreater/> : <TbMathLower/>)}</span>
						<div className='text-bold'>
							<span>TN</span>
							<span>{(yourTN ? yourTN : '?')}</span>
						</div>
					</div>
					<strong className={`display-results ${getResultFieldClassName({isCombat: false, yourSum, opponentSum})}`}>
						<span>{showYourResults ? yourSum() : '.'}</span>
						<span>{showYourResults && (wasTestSuccessful ? <TbMathEqualGreater/> : <TbMathLower/>)}</span>
						<span>{showYourResults ? yourTN : ''}</span>
						{(showYourResults && <span>
							<FiArrowRight />{getResultFieldClassName({isCombat: false, yourSum, opponentSum})?.toUpperCase()}
						</span>)}
					</strong>
				</div>

				{(showCombatSettings && <div className={`combat-settings ${yourTN > 5 ? 'unfocus' : ''}`}>
					<div className='combat-settings-and-modifiers'>
						<h3>Combat Roll</h3>
						<strong className='title'>choose opponent's Fight Stat</strong>
						<div className='combat-opponent-fight' onClick={handleButtonClick}>
							{createOpponentFightButtons(opponentStat)}
						</div>
						<strong className='title'>add opponent's Modifier?</strong>
						<div className='modifiers' onClick={handleButtonClick}>
							{createModifierButtons(opponentModifier, true)}
						</div>
					</div>

					<div className='display-results'>
						<span><strong>YOU:</strong></span>
						<div>
							<span>{statToBeTested.stat}</span>
							<span>{yourStatValue}</span>
						</div>
						<span><TbPlus/></span>
						<div>
							<span>mod</span>
							<span>{yourModifier > 0 ? '+' : ''}{yourModifier}</span>
						</div>
						<span><TbPlus/></span>
						<div>
							<span>dice</span>
							<span>{yourDiceResult ? yourDiceResult : '?'}</span>
						</div>
						<span> <TbEqual/> </span>
						<div className='text-bold'>
							<span>SUM</span>
							<span>{yourDiceResult ? yourSum() : '?'}</span>
						</div>
					</div>
					<div className='display-results'>
						<span><strong>Opponent:</strong></span>
						<div>
							<span>Stat</span>
							<span>{opponentStat}</span>
						</div>
						<span><TbPlus/></span>
						<div>
							<span>mod</span>
							<span>{opponentModifier > 0 ? '+' : ''}{opponentModifier}</span>
						</div>
						<span><TbPlus/></span>
						<div>
							<span>dice</span>
							<span>{opponentDiceResult ? opponentDiceResult : '?'}</span>
						</div>
						<span> <TbEqual/> </span>
						<div className='text-bold'>
							<span>SUM</span>
							<span>{opponentDiceResult ? opponentSum() : '?'}</span>
						</div>
					</div>
					<strong className={`display-results ${getResultFieldClassName({isCombat: true, yourSum, opponentSum})}`}>
						<span>{opponentDiceResult ? yourSum() : '.'}</span>
						<span>{opponentDiceResult && (getCombatResultSign())}</span>
						<span>{opponentDiceResult ? opponentSum()  : ''}</span>
						{(opponentDiceResult && <span>
							<FiArrowRight />{getResultFieldClassName({isCombat: true, yourSum, opponentSum})?.toUpperCase()}
						</span>)}
					</strong>
				</div>)}

				<div className={`damage-settings ${yourTN < 6 && ((yourSum() > opponentSum())) ? '' : 'disabled'}`}>
					<h3>Damage count</h3>
					<strong className='title'>opponent's Armour</strong>
					<div className='damage-opponent-armour'>
						{createOpponentArmourButtons({opponentArmour, handleSetOpponentArmour})}
					</div>
					<strong className='title'>Damage modifier</strong>
					<div className='damage-weapon-modifiers'>
						{createWeaponDamageModifierButtons({weaponDamageModifier, handleSetWeaponDamageModifier})}
					</div>

					<div className='display-results'>
						<div>
							<span>Sum</span>
							<span>{(opponentDiceResult ? yourSum() : '?')}</span>
						</div>
						<span><TbMinus/></span>
						<div>
							<span>Armour</span>
							<span>{opponentArmour ? opponentArmour : '?'}</span>
						</div>
						<span><TbPlus/></span>
						<div>
							<span>Mod</span>
							<span>{weaponDamageModifier ? weaponDamageModifier : '?'}</span>
						</div>
					</div>

					{(opponentArmour >= 0 && <strong className={`display-results ${getResultFieldClassName({isCombat: true, yourSum, opponentSum})}`}>
						<span>DAMAGE</span>
						<span>{(opponentArmour >= 0 && opponentDiceResult ? yourSum() - parseInt(opponentArmour) + parseInt(weaponDamageModifier) : '?')}</span>
					</strong>)}
				</div>
			</div>

			<div className='buttons'>
				<button className='success' disabled={!yourTN} onClick={performStatTest}>Test Stat</button>
				<button className='danger' disabled={!yourTN} onClick={performStatTest} data-close={true}>Test and Close</button>
				<button className='warning' disabled={!opponentStat} onClick={performCombatTest}>Combat Test</button>
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