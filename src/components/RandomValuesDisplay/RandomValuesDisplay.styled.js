import styled from '@emotion/styled'

const RandomValuesDisplayStyled = styled.div`
    display: flex;
    height: ${props => props.maxSize}px;
    width: 120px;
    div {
        font-size: 12px;
    }
    span {
        font-size: 32px;
    }

`

export default RandomValuesDisplayStyled;