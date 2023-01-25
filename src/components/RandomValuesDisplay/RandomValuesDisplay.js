import React from 'react'
import RandomValuesDisplayStyled from './RandomValuesDisplay.styled'

const RandomValuesDisplay = props => {
    const display = (props.randomVert >= 0) 
        ? (
            <div className="flex-column">
                <div >Random coords:</div>
                <span className="font-bold">{props.randomVert}, {props.randomHori}</span>
            </div>
        )
        : ''
    ;

    return (
        <RandomValuesDisplayStyled>
            {display}  
        </RandomValuesDisplayStyled>
    )
}

export default RandomValuesDisplay