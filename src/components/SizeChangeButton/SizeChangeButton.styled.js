import styled from '@emotion/styled';

const SizeChangeButtonStyled = styled.button`
    background-color: #e6e6e6;
    border-radius: ${props => props.maxSize / 10}px;
    min-height: ${props => props.maxSize}px;
    min-width: ${props => props.maxSize}px;
    border: 0;
    margin: ${props => props.yMargin}px ${props => props.xMargin}px;
`

export default SizeChangeButtonStyled;