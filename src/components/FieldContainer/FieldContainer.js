import React, { useState } from 'react';
import Canvas from '../Canvas/Canvas';
import RandomizeButton from '../RandomizeButton/RandomizeButton';
import RandomValuesDisplay from '../RandomValuesDisplay/RandomValuesDisplay';
import SizeInput from '../SizeInput/SizeInput';
import FieldContainerStyled from './FieldContainer.styled';

const FieldContainer = () => {
    const [verticalLines, setVerticalLines] = useState(90);
    const [horizontalLines, setHorizontalLines] = useState(60);
    const [randomHori, setRandomHori] = useState(-1);
    const [randomVert, setRandomVert] = useState(-1);
    const maxSize = 18;

    const handleSizeChange = e => {
        const isHorizontal = e.target.dataset.isHorizontal;
        let newValue;
        if (e.target.value) {
            newValue = e.target.value;
        } else {
            const amount = parseInt(e.target.dataset.amount);
            if (isHorizontal) {
                newValue = parseInt(horizontalLines) + amount;
            } else {
                newValue = parseInt(verticalLines) + amount;
            }
        }
        if (isHorizontal) {
            setHorizontalLines(newValue > 0 ? newValue : 1);
        } else {
            setVerticalLines(newValue > 0 ? newValue : 1);
        }
        setRandomHori(-1);
        setRandomVert(-1);
    }

    const handleRandomizeButtonClick = () => {
        setRandomHori(Math.floor(Math.random() * horizontalLines));
        setRandomVert(Math.floor(Math.random() * verticalLines));
    }

    const randomDisplay = (
        randomHori >= -1 
            ? <RandomValuesDisplay
                randomHori={randomHori}
                randomVert={randomVert}
                maxSize={maxSize} />
            : ''
    );

    return (
        <FieldContainerStyled maxSize={maxSize}>
            <div className="field__container--left">
                <RandomizeButton 
                    maxSize={maxSize} 
                    onClick={handleRandomizeButtonClick}/>
                <div className="field__size-input flex-column">
                    
                </div>
                <RandomizeButton maxSize={maxSize} />
            </div>
            <div className="field__container--middle">
                <div className="field__size-input">
                    {randomDisplay}
                </div>
                <div className="field__display-canvas">
                    <Canvas 
                        width={window.innerWidth - maxSize}
                        height={window.innerHeight - maxSize * 4}
                        verticalLines={verticalLines}
                        horizontalLines={horizontalLines}
                        randomHori={randomHori}
                        randomVert={randomVert}
                    />
                </div>
                <div className="field__range-selector">
                    <SizeInput 
                        handleSizeChange={handleSizeChange}
                        value={verticalLines}
                        maxSize={maxSize}
                    />
                </div>
            </div>
            <div className="field__container--right">
                <RandomizeButton maxSize={maxSize} />
                <div className="field__range-selector">
                    <SizeInput
                        handleSizeChange={handleSizeChange}
                        isHorizontal={true}
                        value={horizontalLines}
                        xMargin={0}
                        yMargin={maxSize / 10}
                        maxSize={maxSize}
                    />
                </div>
                <RandomizeButton maxSize={maxSize} />
            </div>
        </FieldContainerStyled>
    )
}

export default FieldContainer;