import React from 'react';
import Canvas from '../Canvas/Canvas';
import RandomizeButton from '../RandomizeButton/RandomizeButton';
import FieldContainerStyled from './FieldContainer.styled';

const FieldContainer = () => {
    return (
        <FieldContainerStyled>
            <div className="field__container--left">
                <RandomizeButton />
                <div className="field__size-input">size-input</div>
                <RandomizeButton />
            </div>
            <div className="field__container--middle">
                <div className="field__size-input">size-input</div>
                <div className="field__display-canvas">
                    <Canvas 
                        width={window.innerWidth - 264} 
                        height={window.innerHeight - 48} 
                    />
                </div>
                <div className="field__range-selector">range</div>
            </div>
            <div className="field__container--right">
                <RandomizeButton />
                <div className="field__range-selector">range</div>
                <RandomizeButton />
            </div>
            <div className="field__container--sets">
                <div className="field__sets">
                    sets
                </div>
            </div>
        </FieldContainerStyled>
    )
}

export default FieldContainer;