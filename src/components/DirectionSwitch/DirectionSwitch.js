import React from 'react'
import StyledDirectionSwitch from './DirectionSwitch.styled'

const DirectionSwitch = ({isDisplayVertical, handleChangeDirection}) => {
  return (
    <StyledDirectionSwitch className={`direction-switch ${isDisplayVertical ? 'checked' : ''}`}>
		<input className="tgl tgl-flip" id="cb3" type="checkbox"/>
		<label
			defaultChecked={isDisplayVertical}
			value={isDisplayVertical}
			onClick={handleChangeDirection}
			className={`tgl-btn ${isDisplayVertical ? 'checked' : ''}`} 
			data-tg-off="Vertical"
			data-tg-on="Horizontal"
			htmlFor="cb3" />
    </StyledDirectionSwitch>
  )
}

export default DirectionSwitch