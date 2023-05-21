import React from 'react';
import DiceStyled from './Dice.styled';
import DiceRow from './DiceRow';

const Dice = () => {
    const range = Array.from(Array(10), (_, i) => ++i);
    const multipliers = range.map(i => <button key={i} data-key={i}>{i}</button>);
    const initialDiceSet = [
        {max: 4, min: 1},
        {max: 6, min: 1},
        {max: 9, min: 0},
        {max: 20, min: 1},
        {max: 99, min: 0}
    ];
    const createDiceReults = (diceSets) => {
        return diceSets.map((set, index) => {
            return (
                <DiceRow
                    key={index}
                    index={index}
                    multipliers={multipliers}
                    min={set.min}
                    max={set.max} />
             );
        })
    }

    return (
        <DiceStyled>
            {createDiceReults(initialDiceSet)}
        </DiceStyled>
    )
}

export default Dice