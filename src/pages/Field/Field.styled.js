import styled from '@emotion/styled';

const FieldStyled = styled.main`
    padding: 24px 48px;
    .field {
        &__container {
            border: 1px solid blue;
            display: flex;
            &--left,
            &--middle,
            &--right,
            &--sets {
                display: flex;
                flex-direction: column;
                padding: 6px;
            }
            
        }
    }
`;

export default FieldStyled;