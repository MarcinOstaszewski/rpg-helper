import React, { useState } from 'react';
import { getRandomFromRange } from '../../helpers/helperFunctions';

const DiceRow = ({min, max, multipliers}) => {
    const [results, setResults] = useState([]);
    let resultsSum;

    const multiplierClickHandler = e => {
        const key = e.target.dataset.key;
        if (key) {
            const rndResults = [];
            for (let i =  0; i < key; i++) {
                rndResults.push(getRandomFromRange(max, min));
            }
            setResults(rndResults);
        }
    }    
    if (results[0] > -1) {
        resultsSum = (
            results.reduce((sum, val) => sum + val, 0)
        );
    }

    return (
        <div className="dice__row">
            <div className="dice__max"><span className="font-75-percent">D</span>{max - min + 1}</div>
            <div className='dice__multipliers'
                title="Throw a certain number of dice"
                onClick={multiplierClickHandler}
            >
                {multipliers}
            </div>
            <div className="dice__display">
                {results[0] ? 'Results:' : ''}
                <div className="dice__results">
                    {results !== -1 
                        ? results.map((el, i) => <span key={i}>{el}</span>) 
                        : ''}
                    <span className="dice__sum">{results[0] > -1 ? `Sum: ${resultsSum}` : ''}</span>
                </div>
            </div>
        </div>
    )
}

export default DiceRow;