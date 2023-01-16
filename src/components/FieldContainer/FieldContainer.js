import React from 'react';
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
              <div className="field__display-canvas">canvas</div>
              <div className="field__range-selector">range</div>
          </div>
          <div className="field__container--right">
              <RandomizeButton />
              <div className="field__range-selector">range</div>
              <RandomizeButton />
          </div>
          <div className="field__container--sets">
              sets
          </div>
      </FieldContainerStyled>
  )
}

export default FieldContainer;