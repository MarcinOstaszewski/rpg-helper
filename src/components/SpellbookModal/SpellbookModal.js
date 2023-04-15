import React, { useState } from 'react';
import StyledSoldiersContainer from './SpellbookModal.styled';
import { wizardSchoolsData } from '../../helpers/wizardSchoolsData';
import { casterTypes, propertyNames } from '../../helpers/constants';

const SpellbookModal = ({handleClose, castersData, updateCastersData, updateWizardSpells}) => {
	const [spellAndDescription, setSpellAndDescription] = useState({name: 'Click a spell above', descr: "to see it's description"});
	const allSpellsDescriptions = {}; 
	Object.keys(wizardSchoolsData).forEach(school => {
		Object.keys(wizardSchoolsData[school].spells).forEach(spell => {
			allSpellsDescriptions[spell] = wizardSchoolsData[school].spells[spell].description
		})
	});
	const onSpellButtonClick = e => {
		const spellWithDescription = {
			name: e.target.innerText,
			descr: allSpellsDescriptions[e.target.innerText]
		}
		updateWizardSpells(e)
		setSpellAndDescription(spellWithDescription);
	}
	const { wizardsSchool } = castersData[casterTypes.WIZ];

	const wizardsSchoolSelect = (
		<select
			className='primary-school-select'
			value={wizardsSchool}
			onChange={updateCastersData}
			data-type={casterTypes.WIZ}
			data-property={propertyNames.WIZARDS_SCHOOL}
		>
			{Object.keys(wizardSchoolsData).map((school, i) => (<option value={school} key={i}>{school}</option>))}
		</select>
	);

	const magicSchoolRows =  Object.keys(wizardSchoolsData).map((school, i) => {
		let additionsClassName;
		if (school === wizardsSchool) {additionsClassName = 'primary'}
		else if (wizardSchoolsData[school].aligned.includes(wizardsSchool)) {additionsClassName = 'aligned'}
		else if (wizardSchoolsData[school].opposed === wizardsSchool) {additionsClassName = 'opposed'}
		const spellButtons = Object.keys(wizardSchoolsData[school].spells).map(spell => {
			return (
				<span className='spell-field' key={spell}>
					<button className='spell-button'>{spell}</button>
				</span>
			)
		});
		
		return (
			<div className={`school-row ${additionsClassName}`} key={i}>
				<span className='school-field'>{school}</span>
				{spellButtons}
			</div>
		)
	});

  return (
    <StyledSoldiersContainer>
			<div className='spellbook-content'>
				<div className='modal-close' onClick={handleClose}>&times;</div>
				<header className='spellbook-header'>
					<span className='header-text-field'>Primary Wizard School</span>
					<span>{wizardsSchoolSelect}</span>
					<span className='header-text-field'>Change</span>
					<span>- / +</span>
					<span className='header-text-field'>Lock</span>
					{/* <span className='header-text-field'>Learn new spell</span> */}
					{/* <span className='header-text-field'>Improve spell</span> */}
				</header>
				<main className='spellbook-main' onClick={onSpellButtonClick}>
					{magicSchoolRows}
					<p className='spell-name-description'>
						{(spellAndDescription && <><span className='name'>{spellAndDescription.name}:</span>
						<span className='description'>{spellAndDescription.descr}</span></>)}
					</p>
				</main>
			</div>
    </StyledSoldiersContainer>
  )
}

export default SpellbookModal;