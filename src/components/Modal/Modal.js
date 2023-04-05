import React, { useState } from 'react';
import { createTangetNumberButtons, createModifierButtons } from '../../helpers/helperFunctions';
import StyledModal from './Modal.styled';

const Modal = ({handleRemove, handleCancel, showRemoveContent, showStatTestContent, soldierData, statsToBeTested}) => {
	const [chosenTN, setChoseTN] = useState(0);
	const [chosenModifier, setChoseModifier] = useState(0);
	const targetNumbersButtons = createTangetNumberButtons(chosenTN);
	const modifierNumberButtons = createModifierButtons(chosenModifier);

	const handleButtonClick = e => {
		const modifier = parseInt(e.target.dataset.modifier || 0);
		const number = parseInt(e.target.dataset.number || 0);
		if (modifier) setChoseModifier(modifier);
		if (number) setChoseTN(number);
	}

	const removeSoldierContent = showRemoveContent && (
		<div className='remove-soldier content-container'>
			<h3>Are you sure you want to</h3>
			<div className='soldier-name'>
				remove soldier: <span>#{soldierData.index} - {soldierData.name}?</span>
			</div>
			<div className='buttons'>
				<button className='danger' onClick={handleRemove}>Remove</button>
				<button className='info' onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	);

	const statTestContent = showStatTestContent && (
		<div className='stat-test content-container'>
			<h3><strong>{statsToBeTested.stat} {statsToBeTested.value}</strong> test</h3>
			<div className='test-settings'>
				<div className='target-numbers-and-modifiers'>
					<strong>Target Number?</strong>
					<div className='target-numbers' onClick={handleButtonClick}>
						{targetNumbersButtons}
					</div>
					<strong>Modifier?</strong>
					<div className='modifiers' onClick={handleButtonClick}>
						{modifierNumberButtons}
					</div>
					<strong className='text-big'>
						<span>{chosenTN ? `TN: ${chosenTN}` : ''}</span> 
						<span>{chosenModifier ? `modifier: ${chosenModifier > 0 ? '+' : ''}${chosenModifier}` : ''}</span>
					</strong>
				</div>

				{/* <div className='combat-settings-and-result'></div>
				<div className='combat-oponent-settings'></div> */}
			</div>
			<div className='buttons'>
				<button className='success' disabled={!chosenTN} onClick={() => {}}>Test Stat</button>
				<button className='danger' disabled={!chosenTN} onClick={() => {}}>Test and Close</button>
				<button className='info' onClick={handleCancel}>Cancel</button>
			</div>
		</div>
	)
	
	
	const modal = (
		<StyledModal>
				<div className='modal-content'>
					{removeSoldierContent}

					{statTestContent}
				</div>
    </StyledModal>
	)

  return modal
}

export default Modal