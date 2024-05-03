import React, { useState } from 'react';
import StyledSpellbookModal from './SpellbookModal.styled';
import { wizardSchoolsData } from '../../helpers/wizardSchoolsData';
import { casterTypes, propertyNames } from '../../helpers/constants';
import { getRandomFromRange } from '../../helpers/helperFunctions';
import { TbMathEqualGreater, TbMathLower } from 'react-icons/tb';
import Toggle from '../Toggle/Toggle';
import DirectionSwitch from '../DirectionSwitch/DirectionSwitch';

const SpellbookModal = ({handleClose, castersData, updateCastersData, updateWizardSpells}) => {
	const [spellAndDescription, setSpellAndDescription] = useState({name: 'Click a spell above', description: "to see it's description"});
	const [isSchoolChangeLocked, setIsSchoolChangeLocked] = useState(castersData[casterTypes.WIZ].isSchoolChangeLocked || false);
	const [spellCastingResult, setSpellCastingResult] = useState('');
	const [isDisplayVertical, setIsDisplayVertical] = useState(false);

	const allSpellsList = {};
	for (let school in wizardSchoolsData) {
		for (let spell in wizardSchoolsData[school].spells) {
			allSpellsList[spell] = {...wizardSchoolsData[school].spells[spell], school};
		}
	}
	const onToggleClick = e => {
		const newCastersData = {...castersData};
		newCastersData[casterTypes.WIZ].isSchoolChangeLocked = !isSchoolChangeLocked;
		setIsSchoolChangeLocked(!isSchoolChangeLocked);
		updateCastersData(e);
		setSpellCastingResult('');
	}
	const handleChangeDirection = () => {
		setIsDisplayVertical(!isDisplayVertical);
	}
	const getCastingModifier = (schoolData, spellIsFromSchool) => {
		if (wizardsSchool === spellIsFromSchool) return 0;
		if (schoolData.aligned.includes(spellIsFromSchool)) return 2;
		if (schoolData.opposed === spellIsFromSchool) return 6;
		return 4
	}
	const getResultSign = (diceThrow, castingSum) => {
		if (diceThrow >= castingSum) return [<TbMathEqualGreater/>, 'success'];
		if (diceThrow < castingSum) return [<TbMathLower/>, 'failure'];
	}
	const getDamageFromFailure = result => {
		if (result > 19) return 5;
		if (result > 9) return 2;
		if (result > 4) return 1;
		return 0;
	}
	const getCastingResultMessage = (spellName, castingNumber, castingModifier) => {
		const diceThrow = getRandomFromRange(20, 1);
		const castingSum = castingNumber + castingModifier;
		const [resultSign, resultText] = getResultSign(diceThrow, castingSum);
		const isSuccess = diceThrow >= castingSum;
		const damageTaken = getDamageFromFailure(castingSum - diceThrow);
		return (
			<div className={`casting-result ${resultText}`}>
				<p>
					Casting <strong className='color-important'>{spellName} ({castingNumber})</strong>
					was a <strong>{resultText.toUpperCase()}</strong>
					{(!isSuccess && 
						(damageTaken > 0
							? <span>receive <strong>-{damageTaken} HP</strong></span>
							: <span>no damage</span>
						)
					)}
				</p>
				<p>
					(D20 result) <strong className='color-important'>{diceThrow} {resultSign} {castingSum}</strong>
					({castingNumber} + {castingModifier} = CastingNumber + modifier)
				</p>
			</div>
		);
	}
	const onSpellButtonClick = e => {
		if (e.target.tagName !== 'BUTTON') return;
		const name = e.target.innerText;
		const spellData = {name, ...allSpellsList[name]};
		setSpellAndDescription(spellData);
		if (isSchoolChangeLocked) {
			const { castingNumber, school } = allSpellsList[name];
			const castingModifier = getCastingModifier(wizardSchoolsData[wizardsSchool], school);
			setSpellCastingResult(
				getCastingResultMessage(name, castingNumber, castingModifier)
			);
		} else {
			setSpellCastingResult('');
			updateWizardSpells(spellData);
		}
	}
	const { wizardsSchool } = castersData[casterTypes.WIZ];

	const wizardsSchoolSelect = (
		<select
			className='school-select'
			value={wizardsSchool}
			onChange={updateCastersData}
			disabled={isSchoolChangeLocked}
			data-type={casterTypes.WIZ}
			data-property={propertyNames.WIZARDS_SCHOOL}
		>
			{Object.keys(wizardSchoolsData).map((school, i) => (<option value={school} key={i}>{school}</option>))}
		</select>
	);

	const magicSchoolRows =  Object.keys(wizardSchoolsData).map((school, i) => {
		let schoolTypeClassName = "neutral";
		let schoolModifier = 4;
		if (school === wizardsSchool) {
			schoolTypeClassName = 'primary';
			schoolModifier = 0;
		}
		else if (wizardSchoolsData[school].aligned.includes(wizardsSchool)) {
			schoolTypeClassName = 'aligned';
			schoolModifier = 2;
		}
		else if (wizardSchoolsData[school].opposed === wizardsSchool) {
			schoolTypeClassName = 'opposed';
			schoolModifier = 6;
		}
		const spellButtons = Object.keys(wizardSchoolsData[school].spells).map(spell => {
			const castingNumber = castersData[casterTypes.WIZ].spellList[spell];
			const knownSpellClassname = !!castingNumber ? ' known-spell' : '';
			const dataCastingNumber = castingNumber || allSpellsList[spell].castingNumber;
			return (
				<span className='spell-field' key={spell}>
					<button className={`spell-button${knownSpellClassname}`} 
						data-casting-number={dataCastingNumber}
					>
						{spell}
					</button>
				</span>
			)
		});
		
		return (
			<div className={`school-row ${schoolTypeClassName}`} key={i}>
				<div className='school-field' data-school-modifier={schoolModifier} data-school-type={schoolTypeClassName}>
					<div className='school-name'>{school}</div>
				</div>
				{spellButtons}
			</div>
		)
	});

  return (
    <StyledSpellbookModal>
		<div className={`spellbook-content ${isDisplayVertical ? 'display-vertical' : ''}`}>
			<div className='modal-close' onClick={handleClose}>&times;</div>
			<DirectionSwitch isDisplayVertical={isDisplayVertical} handleChangeDirection={handleChangeDirection} />
			<header className='spellbook-header primary-color'>
				<span className='header-text'>Wizard's School</span>
				<span className='school-select-container'>{wizardsSchoolSelect}</span>

				<Toggle onToggleClick={onToggleClick} isSchoolChangeLocked={isSchoolChangeLocked} />
				
				{/* <span className='header-text'>Improve spell</span> */}
			</header>

			<main className={`spellbook-main ${isSchoolChangeLocked ? 'change-locked' : ''}`}>
				<section className='spellbook-rows' onClick={onSpellButtonClick}>
					{magicSchoolRows}
				</section>
			</main>

			<footer className='spellbook-footer'>
				<section className='spellbook-description'>
					<p className='spell-name-description primary-color'>
						{(spellAndDescription && 
							<>
								<span className='name'>
									{<strong>{spellAndDescription.name}</strong>}
									{(spellAndDescription.castingNumber && <i> (casting number {spellAndDescription.castingNumber})</i>)}
								</span>
								<span className='description'>{spellAndDescription.description}</span>
							</>
						)}
					</p>
				</section>
				<section className='casting-result-container primary-color'>
					{((spellCastingResult === '' && !isSchoolChangeLocked)
						?  <div className='choose-your-spells'>
								<div>You can now choose your spells from the list above</div>
							</div>
						: spellCastingResult
					)}
				</section>
			</footer>
		</div>
    </StyledSpellbookModal>
  )
}

export default SpellbookModal;