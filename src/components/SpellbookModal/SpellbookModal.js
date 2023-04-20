import React, { useState } from 'react';
import StyledSpellbookModal from './SpellbookModal.styled';
import { wizardSchoolsData } from '../../helpers/wizardSchoolsData';
import { casterTypes, propertyNames } from '../../helpers/constants';
import { getRandomFromRange } from '../../helpers/helperFunctions';
import { TbMathEqualGreater, TbMathLower } from 'react-icons/tb';

const SpellbookModal = ({handleClose, castersData, updateCastersData, updateWizardSpells}) => {
	const [spellAndDescription, setSpellAndDescription] = useState({name: 'Click a spell above', description: "to see it's description"});
	const [isSchoolChangeLocked, setIsSchoolChangeLocked] = useState(castersData[casterTypes.WIZ].isSchoolChangeLocked || false);
	const [spellCastingResult, setSpellCastingResult] = useState('');
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
	const onSpellButtonClick = e => {
		if (e.target.tagName !== 'BUTTON') return;
		const name = e.target.innerText;
		const spellData = {name, ...allSpellsList[name]};
		setSpellAndDescription(spellData);
		if (isSchoolChangeLocked) {
			const { castingNumber, school } = allSpellsList[name];
			const castingModifier = getCastingModifier(wizardSchoolsData[wizardsSchool], school);
			const diceThrow = getRandomFromRange(20, 1);
			const castingSum = castingNumber + castingModifier;
			const [resultSign, resultName] = getResultSign(diceThrow, castingSum);
			setSpellCastingResult(<>
				<p className={`casting-result ${resultName}`}>
					<strong className='color-important'>{name}</strong> casting number + school modifier: {castingNumber} + {castingModifier} = 
					<strong className='color-important'>{castingSum} {resultSign} {diceThrow}</strong> (D20 result)
				</p>
				<p className={`casting-result ${resultName} second`}>
					<strong>{resultName.toUpperCase()}</strong>
					{(diceThrow < castingSum && <strong>Damage: {getDamageFromFailure(castingSum - diceThrow)}</strong>)}
				</p>
			</>);
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
		let schoolTypeClassName;
		if (school === wizardsSchool) {schoolTypeClassName = 'primary'}
		else if (wizardSchoolsData[school].aligned.includes(wizardsSchool)) {schoolTypeClassName = 'aligned'}
		else if (wizardSchoolsData[school].opposed === wizardsSchool) {schoolTypeClassName = 'opposed'}
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
				<span className='school-field'>{school}</span>
				{spellButtons}
			</div>
		)
	});

  return (
    <StyledSpellbookModal>
		<div className='spellbook-content'>
			<div className='modal-close' onClick={handleClose}>&times;</div>
			<header className='spellbook-header primary-color'>
				<span className='header-text'>Primary Wizard School</span>
				<span className='school-select-container'>{wizardsSchoolSelect}</span>

				<span>
					<label className='label'>
						<input name='toggle-checkbox' 
							className='toggle-checkbox' 
							type='checkbox' 
							defaultChecked={isSchoolChangeLocked}
							data-property={'isSchoolChangeLocked'}
							data-type={casterTypes.WIZ}
							value={!isSchoolChangeLocked}
							onClick={onToggleClick} />
						<span className='toggle'/>
						<span className='label-text' htmlFor='toggle-checkbox'>{isSchoolChangeLocked ? 'Unlock' : 'Lock'}</span>
					</label>
				</span>
				
				{/* <span className='header-text'>Learn new spell</span> */}
				{/* <span className='header-text'>Improve spell</span> */}
			</header>

			<main className={`spellbook-main ${isSchoolChangeLocked ? 'change-locked' : ''}`}>
				<section className='spellbook-rows' onClick={onSpellButtonClick}>
					{magicSchoolRows}
				</section>
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
					{spellCastingResult}
				</section>
			</main>
		</div>
    </StyledSpellbookModal>
  )
}

export default SpellbookModal;