import React from 'react'

const DiceRow = (props) => {
    const isResults = props.results.length;
    let resultsSum;
    const multiplierClickHandler = e => {
        if (e.target.dataset.key) {
            let results = [];
            for (let i = 0; i < e.target.dataset.key; i++) {
                results.push(Math.floor(Math.random() * props.value) + props.resultOffset);
            }
            props.setResultsFunction(results);
        }
    }    
    if (isResults) {
        resultsSum = props.results.reduce((sum, val) => {
            return sum + val;
        }, 0);
    }

    return (
        <div className="dice__row">
            <div className="dice__value"><span className="font-75-percent">D</span>{props.value}</div>
            <div className='dice__multipliers'
                title="Throw a certain number of dice"
                data-value={props.value}
                onClick={multiplierClickHandler}
            >
                {props.multipliers}
            </div>
            <div className="dice__display">
                {isResults ? 'Results:' : ''}
                <div className="dice__results">
                    {props.results !== -1 
                        ? props.results.map((el, i) => <span key={i}>{el}</span>) 
                        : ''}
                    <span className="dice__sum">{isResults ? `Sum: ${resultsSum}` : ''}</span>
                </div>
            </div>
        </div>
    )
}

export default DiceRow;