import React from 'react'
import SizeChangeButtonStyled from './SizeChangeButton.styled'

const SizeChangeButton = props => {
    return (
        <SizeChangeButtonStyled 
            maxSize={props.maxSize}
            onClick={props.handleSizeChange}
            data-amount={props.amount}
            data-is-horizontal={props.isHorizontal}
        >
            {props.amount}
        </SizeChangeButtonStyled>
    )
}

export default SizeChangeButton