import styled from '@emotion/styled'

const RandomValuesDisplayStyled = styled.div`
    align-items: center;
    border: ${props => props.border ? '1px solid #ccc' : 0};
    display: flex;
    height: ${props => props.maxSize}px;
    width: ${props => props.maxSize * 2}px;
    .display {
        display: flex;
        align-items: center;
        justify-content: center;
        &--text {
            font-size: ${props => props.maxSize / 6}px;
        }
        &--values {
            font-size: ${props => props.maxSize / 2}px;
        }
    }

`

export default RandomValuesDisplayStyled;