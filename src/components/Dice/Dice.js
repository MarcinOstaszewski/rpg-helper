import React, { useState } from 'react';
import DiceStyled from './Dice.styled';

const Dice = () => {
    const range = Array.from(Array(9), (_, i) => ++i);
    const multipliers = range.map(i => <button key={i} data-key={i}>{i}</button>);
    const [k6results, setK6results] = useState(<span></span>);

    const multiplierClickHandler = e => {
        if (e.target.dataset.key) {
            let results = [];
            for (let i = 0; i < e.target.dataset.key; i++) {
                results.push(Math.floor(Math.random() * 6) + 1);
            }
            results = results.map((el, i) => <span key={i}>{el}</span>);
            setK6results(results);
        }
    }

    return (
        <DiceStyled>
            <div className="dice__row">
                <div className="dice__value">K6</div>
                <div className='dice__multipliers' onClick={multiplierClickHandler}>
                    {multipliers}
                </div>
                <div className="dice__display">
                    { k6results.length ? 'Results:' : ''}
                    <div className="dice__results">
                        {k6results}
                    </div>
                </div>
            </div>
        </DiceStyled>
    )
}

export default Dice