import styled from '@emotion/styled';

const SizeInputStyled = styled.div`
    justify-content: space-between;
    
    input {
        font-size: 16px;
        font-weight: bold;
        height: ${props => props.maxSize}px;
        border-bottom: 1px solid black;
        background-color: #f9f9f9;
        width: ${props => props.maxSize}px; 
        text-align: center;
    }
`

export default SizeInputStyled;