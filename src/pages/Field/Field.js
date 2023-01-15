import React from 'react';
import FieldStyled from './Field.styled';

const Field = () => {
  return (
        <FieldStyled>
            <div className="field__container">
                <div className="field__container--left">
                    <button className="field__randomize">ICON</button>
                    <div className="field__size-input">size-input</div>
                    <button className="field__randomize">ICON</button>
                </div>
                <div className="field__container--middle">
                    <div className="field__size-input">size-input</div>
                    <div className="field__display-canvas">canvas</div>
                    <div className="field__range-selector">range</div>
                </div>
                <div className="field__container--right">
                    <button className="field__randomize">ICON</button>
                    <div className="field__range-selector">range</div>
                    <button className="field__randomize">ICON</button>
                </div>
                <div className="field__container--sets">
                    sets
                </div>
            </div>
        </FieldStyled>
    )
}

export default Field;