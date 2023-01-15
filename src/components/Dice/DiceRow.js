import React from 'react'

const DiceRow = (props) => {

    const multiplierClickHandler = e => {
        if (e.target.dataset.key) {
            // const value = e.currentTarget.dataset.value;
            let results = [];
            for (let i = 0; i < e.target.dataset.key; i++) {
                results.push(Math.floor(Math.random() * props.value) + props.resultOffset);
            }
            results = results.map((el, i) => <span key={i}>{el}</span>);
            props.setResultsFunction(results);
        }
    }

    return (
        <div className="dice__row">
            <div className="dice__value">K{props.value}</div>
            <div className='dice__multipliers'
                data-value={props.value}
                onClick={multiplierClickHandler}
            >
                {props.multipliers}
            </div>
            <div className="dice__display">
                {props.results.length ? 'Results:' : ''}
                <div className="dice__results">
                    {props.results}
                </div>
            </div>
        </div>
    )
}

export default DiceRow;