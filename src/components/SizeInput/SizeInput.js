import React from 'react'

const SizeInput = props => {
    return (
        <input 
            className="" 
            type="number" 
            onChange={props.handleChange} 
            value={props.value}
        />
    )
}

export default SizeInput