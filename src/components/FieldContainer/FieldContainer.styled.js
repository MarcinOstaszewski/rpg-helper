import styled from '@emotion/styled';

const FieldContainerStyled = styled.main`
    padding: 24px;
    display: flex;
    .field {
        &__container {
            &--left,
            &--middle,
            &--right,
            &--sets {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 64px;
            }
            &--middle {
                width: calc(100% - 124px);
            }

        }

        &__size-input,
        &__display-canvas,
        &__range-selector,
        &__sets {
            display: flex;
            min-height: 64px;
        }
        &__size-input {
            justify-content: space-evenly;
        }
        &__display-canvas,
        &__sets {
            padding: 12px;
        }
        &__range-selector {
            justify-content: center;
            align-items: center;
        }
    }
`;

export default FieldContainerStyled;