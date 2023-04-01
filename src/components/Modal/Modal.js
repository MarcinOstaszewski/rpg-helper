import React from 'react'
import StyledModal from './Modal.styled'

const Modal = ({handleRemove, handleCancel, soldierData}) => {
	const modal = (
		<StyledModal>
				<div className='content'>
					<div className='remove-soldier'>
						Are you sure you want to
					</div>
					<div className='soldier-name'>remove soldier: <span>#{soldierData.index} - {soldierData.name}?</span></div>
					<div className='buttons'>
						<button className='danger' onClick={handleRemove}>Remove</button>
						<button className='info' onClick={handleCancel}>Cancel</button>
					</div>
				</div>
    </StyledModal>
	)

  return modal
}

export default Modal