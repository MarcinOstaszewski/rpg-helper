import React from 'react'
import SizeChangeButton from '../SizeChangeButton/SizeChangeButton'
import SizeInputField from '../SizeInputField/SizeInputField'
import SizeInputStyled from './SizeInput.styled'

const SizeInput = props => {

    return (
        <SizeInputStyled {...props}>
            <SizeChangeButton {...props} amount="-10" />
            <SizeChangeButton {...props} amount="-5" />
            <SizeChangeButton {...props} amount="-1" />
            <SizeInputField {...props} />
            <SizeChangeButton {...props} amount="+1" />
            <SizeChangeButton {...props} amount="+5" />
            <SizeChangeButton {...props} amount="+10" />
        </SizeInputStyled>
    )
}

export default SizeInput