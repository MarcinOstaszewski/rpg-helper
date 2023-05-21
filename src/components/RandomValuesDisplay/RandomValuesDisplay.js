import React from 'react'
import RandomValuesDisplayStyled from './RandomValuesDisplay.styled'

const RandomValuesDisplay = props => {
    const display = (props.randomVert >= 0) 
        ? (
            <div className="display-random-coordinates">
                <p>
                    Random coordinates:
                    <strong> {props.randomVert}</strong> (width), <strong>{props.randomHori}</strong> (height)
                </p>
            </div>
        )
        : ''
    ;

    return (
        <RandomValuesDisplayStyled maxSize={props.maxSize} border={props.randomHori > -1}>
            {display}  
        </RandomValuesDisplayStyled>
    )
}

export default RandomValuesDisplay