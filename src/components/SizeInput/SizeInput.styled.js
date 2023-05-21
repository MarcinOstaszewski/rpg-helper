import styled from '@emotion/styled';

const SizeInputStyled = styled.div`
    justify-content: space-between;

    .field-size-input {
        font-size: 16px;
        height: 18px;
        border-bottom: 1px solid black;
        width: 60px;
        text-align: center;

        &.vertical {
            width: 60px;
            position: relative;
            /* left: -50%; */
            transform: rotate(90deg);
        }

    }
`

export default SizeInputStyled;