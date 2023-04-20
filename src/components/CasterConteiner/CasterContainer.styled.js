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

        &.spell-book {
            border-color: #3c68ee;
        }
    }

    .character-header {
        display: grid;

        &.wizard {
            grid-template-columns: 2fr 8fr 5fr 3fr;
            .highlighted {
                background-color: #24c;
                border: 1px solid #24b;
            }
            .spell-book {
                font-weight: 700;
                color: #fff;
                background-color: #24c;
                padding: 2px 12px;
                cursor: pointer;
                
                svg {
                    font-size: 24px;
                    margin: 0 0 -4px 6px;
                }
            }
        }
        &.apprentice {
            grid-template-columns: 2fr 8fr 3fr 5fr;
        }

        .name-input-container {
            display: flex;
            align-items: center;
            padding: 0 0 0 6px;
        }

        .highlighted {
            color: #fff;
            background-color: #45f;
            border: 1px solid #35e;
        }

        .name-input {
            width: calc(100% - 45px);
        }

        .name-input, .magic-school-field {
            text-transform: uppercase;
            font-weight: 700;
            padding: 0 0 0 12px;
            text-align: left;
        }
        
        .magic-school-field {
            font-size: 12px;
            line-height: 30px;
        }
        .random-change-name {
            width: 40px;
            height: 28px;
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
                background-color: #00000010;
            }
        }
    }

    .stats-line {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr 3fr 2fr 3fr;

        span {
            font-weight: 700;
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
        .health-field {
			flex-direction: row;
			justify-content: center;
            padding: 6px 0;
            .divider {
                margin: 0 2px;
            }
            .health-select {
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                border: none;
                width: 40%;
                :focus {
                    outline: 0;
                }
            }
		}
    }
`
export default StyledCasterContainer;