import React from 'react'
import { GiRollingDices } from 'react-icons/gi'
import RandomizeButtonStyled from './RandomizeButton.styled';

const RandomizeButton = props => {
    return (
        <RandomizeButtonStyled 
            maxSize={props.maxSize}
            onClick={props.onClick}
        >
            <GiRollingDices />
        </RandomizeButtonStyled>
    )
}

export default RandomizeButton