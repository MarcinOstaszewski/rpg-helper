import React from 'react'
import SizeChangeButton from '../SizeChangeButton/SizeChangeButton'
import SizeInputStyled from './SizeInput.styled'

const SizeInput = props => {

    return (
        <SizeInputStyled {...props}>
            <SizeChangeButton {...props} amount="-10" />
            <SizeChangeButton {...props} amount="-5" />
            <SizeChangeButton {...props} amount="-1" />
            <input
                onChange={props.handleSizeChange}
                value={parseInt(props.value)}
                type="number" 
                data-is-horizontal={props.isHorizontal}
                style={{
                    margin: `${props.yMargin}px ${props.xMargin}px`
                }}
            />
            <SizeChangeButton {...props} amount="+1" />
            <SizeChangeButton {...props} amount="+5" />
            <SizeChangeButton {...props} amount="+10" />
        </SizeInputStyled>
    )
}

export default SizeInput