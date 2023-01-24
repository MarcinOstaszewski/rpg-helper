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
            }
        }
        &--left,
        &--right {
            justify-content: space-between;
        }

        &__size-input,
        &__display-canvas,
        &__range-selector,
        &__sets {
            display: flex;
            min-height: 64px;
        }
        &__size-input {
            justify-content: space-around;

            input {
                font-size: 16px;
                font-weight: bold;
                height: 64px;
                border-bottom: 1px solid black;
                background-color: #f9f9f9;
                width: 64px;
                text-align: center;
            }
        }
        &__display-canvas {
            padding: 12px;
        }
        &__range-selector {
            justify-content: center;
            align-items: center;
        }
    }
`;

export default FieldContainerStyled;