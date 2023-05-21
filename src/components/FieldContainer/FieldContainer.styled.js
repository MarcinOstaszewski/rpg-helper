import styled from '@emotion/styled';

const FieldContainerStyled = styled.main`
    height: calc(100vh - 28px);
    padding: ${props => props.maxSize / 2}px;
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
                width: 18px;
            }
            &--middle {
                width: calc(100vw - ${props => props.maxSize * 3}px);
            }

        }

        &__size-input,
        &__display-canvas,
        &__range-selector {
            display: flex;
            min-height: 18px;
        }
        &__size-input {
            justify-content: space-evenly;
        }
        &__display-canvas {
            padding: 18px;
        }
        &__range-selector {
            align-items: center;
            display: flex;
            text-align: center;
            justify-content: center;
        }
    }
`;

export default FieldContainerStyled;