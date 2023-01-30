import React from 'react'
import RandomValuesDisplayStyled from './RandomValuesDisplay.styled'

const RandomValuesDisplay = props => {
    const display = (props.randomVert >= 0) 
        ? (
            <div className="display flex-column mx-auto">
                <p className="display--text">Random coords:</p>
                <p>
                    <strong className="display--values">
                        {props.randomVert}, {props.randomHori}
                    </strong>
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