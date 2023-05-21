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
        }
        .spell-book,
        .casters-notes {
            color: #fff;
            background-color: #24c;
            border-color: #3c68ee;
            cursor: pointer;
            padding: 0;
        }
        .casters-notes {
            svg {
                margin-left: 24px;
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
            justify-content: flex-start;
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
        font-size: .75rem;
        grid-template-columns: 2fr 2fr 2fr 2fr 2fr 4fr 2fr 3fr;

        &.apprentice {
            grid-template-columns: 2fr 2fr 2fr 2fr 2fr 4fr 5fr;
        }
        
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
            &.casters-notes-field {
                height: 100%;
                padding: 6px 0 6px 6px;

                &-close {
                    display: none;
                }
                textarea {
                    padding: 0 6px 0 0;
                    height: 100%;
                    width: 100%;
                    border: 0;
                    overflow-y: auto;
                    resize: none;

                }
                &.absolute {
                    position: absolute;
                    width: 100%;
                    top: 0px;
                    left: 0px;
                    padding: 24px 32px;
                    background-color: #000000bb;
                    border: 1px solid #000000bb;

                    .casters-notes-field-close {
                        display: block;
                        position: absolute;
                        right: 0;
                        top: 0;
                        width: 32px;
                        font-size: 32px;
                        line-height: 20px;
                        color: #fff;
                        border: none;
                    }

                    textarea {
                        padding: 12px;
                        border-radius: 6px;
                        border: 3px solid #000000aa;
                    }
                }
            }
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