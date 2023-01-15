import styled from '@emotion/styled';

const DiceStyled = styled.main`
    padding: 24px 0 24px 48px;
    .dice {
        &__row {
            border-bottom: 1px solid #ccc;
            display: flex;
            margin-bottom: 6px;
            padding-bottom: 6px;
        }

        &__multipliers {
            display: flex;
            flex-wrap: wrap;
            height: 90px;
            max-width: 90px;
            min-width: 90px;
            button {
                background-color: #16a0ce;
                border: 0;
                border-radius: 6px;
                color: #fff;
                max-height: 30px;
                margin: 1px;
                min-width: 30.3%;
                &:hover {
                    background-color: #70c2de;
                }
            }
        }
        &__value,
        &__display {
            align-content: center;
            font-weight: bold;
            display: flex;
            flex-wrap: wrap;
        }
        &__value {
            font-size: 48px;
            min-width: 140px;
            justify-content: flex-start;
        }
        &__display {
            padding-left: 24px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-content: center;

        }
        &__results {
            display: flex;
            span {
                font-size: 24px;
                padding-right: 16px;
            }
        }
    }
`;

export default DiceStyled;