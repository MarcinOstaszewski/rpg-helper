import React from 'react'
import RepeatIcon from '@mui/icons-material/Repeat';
import RandomizeButtonStyled from './RandomizeButton.styled';

const RandomizeButton = props => {
    return (
        <RandomizeButtonStyled maxSize={props.maxSize}>
            <RepeatIcon />
        </RandomizeButtonStyled>
    )
}

export default RandomizeButton