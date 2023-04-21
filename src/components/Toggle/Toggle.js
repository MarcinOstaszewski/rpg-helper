import React from 'react'
import { casterTypes } from '../../helpers/constants';
import StyledToggle from './Toggle.styled';

const Toggle = ({isSchoolChangeLocked, onToggleClick}) => {
  return (
    <StyledToggle>
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
    </StyledToggle>
  )
}

export default Toggle;