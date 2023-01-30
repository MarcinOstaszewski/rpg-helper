import styled from '@emotion/styled';

const FieldContainerStyled = styled.main`
    padding: ${props => props.maxSize / 3}px;
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
                width: ${props => props.maxSize}px;
            }
            &--middle {
                width: calc(100% - ${props => props.maxSize * 3}px);
            }

        }

        &__size-input,
        &__display-canvas,
        &__range-selector,
        &__sets {
            display: flex;
            min-height: ${props => props.maxSize}px;
        }
        &__size-input {
            justify-content: space-evenly;
        }
        &__display-canvas,
        &__sets {
            padding: ${props => props.maxSize / 5}px;
        }
        &__range-selector {
            justify-content: center;
            align-items: center;
        }
    }
`;

export default FieldContainerStyled;