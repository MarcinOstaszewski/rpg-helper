import React, { useState } from 'react';
import Canvas from '../Canvas/Canvas';
import RandomizeButton from '../RandomizeButton/RandomizeButton';
import SizeInput from '../SizeInput/SizeInput';
import FieldContainerStyled from './FieldContainer.styled';

const FieldContainer = () => {
    const [verticalLines, setVerticalLines] = useState(3);
    const [horizontalLines, setHorizontalLines] = useState(3);

    const handleWidthChange = e => {
        setVerticalLines(e.target.value > 0 ? e.target.value : 1);
    }
    const handleHeightChange = e => {
        setHorizontalLines(e.target.value > 0 ? e.target.value : 1);
    }

    return (
        <FieldContainerStyled>
            <div className="field__container--left">
                <RandomizeButton />
                <div className="field__size-input flex-column">
                    <SizeInput
                        handleChange={handleHeightChange}
                        value={horizontalLines}
                    />
                </div>
                <RandomizeButton />
            </div>
            <div className="field__container--middle">
                <div className="field__size-input">
                    <SizeInput 
                        handleChange={handleWidthChange}
                        value={verticalLines}
                    />
                </div>
                <div className="field__display-canvas">
                    <Canvas 
                        width={window.innerWidth - 264}
                        height={window.innerHeight - 240}
                        verticalLines={verticalLines}
                        horizontalLines={horizontalLines}
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