import React from 'react'
import SizeInputFieldStyled from './SizeInputField.styled'

const SizeInputField = props => {
    return (
        <SizeInputFieldStyled 
            {...props}
            data-is-horizontal={props.isHorizontal}
            onChange={props.handleSizeChange}
            type="number"
            value={parseInt(props.value)}
        />
    )
}

export default SizeInputField