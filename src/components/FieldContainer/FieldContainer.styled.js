import styled from '@emotion/styled';

const FieldContainerStyled = styled.main`
    padding: 24px;
    display: flex;
    .field {
        &--left,
        &--middle,
        &--right,
        &--sets {
            display: flex;
            flex-direction: column;
        }
        &__size-input,
        &__display-canvas,
        &__range-selector,
        &__sets {
            display: flex;
            min-height: 80px;
            padding: 12px;
        }
    }
`;

export default FieldContainerStyled;