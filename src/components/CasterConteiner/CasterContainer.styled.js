import styled from "@emotion/styled";

const StyledCasterContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 12px;

    span {
        border: 1px solid #ddd;
        padding: 6px;
        text-align: center;
    }

    .character-header {
        border-top: 1px solid #ccc;
        display: grid;

        &.wizard {
            grid-template-columns: 2fr 6fr 2fr 6fr;
            .highlighted {
                background-color: #abe;
                border-bottom: 3px solid #9ad;
            }
        }
        &.apprentice {
            grid-template-columns: 2fr 14fr;
        }

        .name-input-container {
            display: flex;
            align-items: center;
            padding: 0 0 0 6px;
        }

        .highlighted {
            color: #111;
            background-color: #bce;
            border-bottom: 3px solid #abd;
            padding-bottom: 3px;
        }

        .name-input {
            width: calc(100% - 30px);
        }

        .magic-school-select {
            width: 100%;
            outline: none;
            border: 0;
            height: 100%;
        }

        .name-input, .magic-school-select {
            text-transform: uppercase;
            font-weight: bold;
            padding: 0px 12px;
        }

        .random-change-name {
            width: 50px;
            height: 28px;
            border: 0;
            margin: 1px 2px;
            font-size: 24px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            &:hover {
                /* color: #fff; */
                background-color: #00000010;
            }
        }
    }

    .stats-line {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;

        span {
            font-weight: bold;
            display: flex;
            flex-direction: column;
        }

        .stats-field {
            border: 0;
            padding: 0;
            
            span:last-child {
                height: 20px;
            }
        }
    }
`
export default StyledCasterContainer;