import React from 'react'
import SizeInputFieldStyled from './SizeInputField.styled'

const SizeInputField = props => {
    return (
        <SizeInputFieldStyled 
            {...props}
            className={`field-size-input ${props.isHorizontal ? 'vertical' : ''}`}
            data-is-horizontal={props.isHorizontal}
            onChange={props.handleSizeChange}
            type="number"
            value={parseInt(props.value)}
        />
    )
}

export default SizeInputField