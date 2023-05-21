import React from 'react';
// import SizeChangeButton from '../SizeChangeButton/SizeChangeButton';
import SizeInputField from '../SizeInputField/SizeInputField';
import SizeInputStyled from './SizeInput.styled';

const SizeInput = props => {
    return (
        <SizeInputStyled {...props} className={`size-input ${props.isHorizontal ? 'vertical' : ''}`}>
            <SizeInputField {...props} />
        </SizeInputStyled>
    )
}

export default SizeInput;