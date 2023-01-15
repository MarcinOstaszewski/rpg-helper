import React, { useState } from 'react';
import DiceStyled from './Dice.styled';
import DiceRow from './DiceRow';

const Dice = () => {
    const range = Array.from(Array(9), (_, i) => ++i);
    const multipliers = range.map(i => <button key={i} data-key={i}>{i}</button>);
    const [k4results, setK4results] = useState(<span></span>);
    const [k6results, setK6results] = useState(<span></span>);
    const [k10results, setK10results] = useState(<span></span>);
    const [k100results, setK100results] = useState(<span></span>);

    return (
        <DiceStyled>
            <DiceRow value={4}
                multipliers={multipliers}
                results={k4results}
                resultOffset={1}
                setResultsFunction={setK4results}
            />
            <DiceRow value={6} 
                multipliers={multipliers} 
                results={k6results} 
                resultOffset={1}
                setResultsFunction={setK6results}
            />
            <DiceRow value={10}
                multipliers={multipliers}
                results={k10results}
                resultOffset={0}
                setResultsFunction={setK10results}
            />
            <DiceRow value={100}
                multipliers={multipliers}
                results={k100results}
                resultOffset={0}
                setResultsFunction={setK100results}
            />
        </DiceStyled>
    )
}

export default Dice