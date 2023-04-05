import React, { useState } from 'react';
import { createTangetNumberButtons, createModifierButtons } from '../../helpers/helperFunctions';
import StyledModal from './Modal.styled';

const Modal = ({handleRemove, handleCancel, showRemoveContent, showStatTestContent, soldierData, statsToBeTested}) => {
	const [chosenTN, setChoseTN] = useState();
	const [chosenModifier, setChoseModifier] = useState();
	const targetNumbersButtons = createTangetNumberButtons();
	const modifierNumberButtons = createModifierButtons();

	const handleButtonClick = e => {
		console.log(e, e.target);
		e.target.classList.add('active');
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
					<strong>Target Number</strong>
					<div className='target-numbers' onClick={handleButtonClick}>
						{targetNumbersButtons}
					</div>
					<strong>Modifier</strong>
					<div className='modifiers' onClick={handleButtonClick}>
						{modifierNumberButtons}
					</div>
				</div>

				{/* <div className='combat-settings-and-result'></div>
				<div className='combat-oponent-settings'></div> */}
			</div>
			<div className='buttons'>
				<button className='success' onClick={handleRemove}>Test Stat</button>
				<button className='danger' onClick={handleRemove}>Test and Close</button>
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