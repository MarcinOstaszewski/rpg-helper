import styled from '@emotion/styled';

const DiceStyled = styled.main`
    padding: 24px 0 24px 24px;
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
            min-width: 120px;
            justify-content: flex-start;
            align-items: baseline;
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
        &__sum {
            border-left: 3px solid #16a0ce;
            border-right: 3px solid #16a0ce;
            color: #16a0ce;
            margin-left: 12px;
            padding-left: 12px;
        }
    }
`;

export default DiceStyled;