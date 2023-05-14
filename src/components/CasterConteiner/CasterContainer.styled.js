import styled from "@emotion/styled";

const StyledCasterContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-top: 12px;

    .character-header {
        font-size: .75rem;
        display: grid;

        span {
            border: 1px solid #ddd;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        svg {
            font-size: 1.5rem;
        }

        &.wizard {
            grid-template-columns: 4fr 6fr 6fr 3fr;
            
            .highlighted {
                background-color: #24c;
                border: 1px solid #24b;
            }
            .spell-book {
                color: #fff;
                background-color: #24c;
                border-color: #3c68ee;
                cursor: pointer;
                padding: 0;
            }
        }
        &.apprentice {
            grid-template-columns: 4fr 6fr 4fr 5fr;
        }

        .name-input-container {
            display: flex;
            align-items: center;
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
            font-size: 1rem;
            font-weight: var(--bold);
            text-transform: uppercase;
            padding: 0 0 0 6px;
        }
        
        .random-change-name {
            width: 40px;
            height: 2rem;
            margin: 1px 2px;
            font-size: 1.2rem;
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
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr 4fr 2fr 3fr;
        font-size: .75rem;
        
        .stats-field {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border: 0;
            padding: 0;


        }
        span {
            border: 1px solid #ddd;
            padding: 6px;
            text-align: center;
            display: flex;
            justify-content: center;
            width: 100%;
        }
        .health-field {
			flex-direction: row;
			justify-content: center;
            align-items: center;
            align-items: center;
            padding: 5px 0;

            .divider {
                margin: 0 2px 0 4px;
            }
            .health-select {
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                background-color: transparent;
                border: none;
                width: 48px;
                
                :focus {
                    outline: 1;
                }
            }
		}
    }

    @media screen and (min-width: 600px) {
        .character-header, .stats-line {
            font-size: 1rem;
        }
    }
`
export default StyledCasterContainer;