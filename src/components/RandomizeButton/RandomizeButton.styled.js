import styled from '@emotion/styled';

const RandomizeButtonStyled = styled.button`
    background-color: #ccc;
    border: 0;
    border-radius: 4px;
    padding: 0;
    margin: 0;
    height: ${props => props.maxSize}px;
    width: ${props => props.maxSize}px;
    svg {
        height: 80%;
        width: 80%;
        fill: #333;
    }
`

export default RandomizeButtonStyled;