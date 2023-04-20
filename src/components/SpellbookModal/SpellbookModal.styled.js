import styled from '@emotion/styled';

const StyledSpellbookModal = styled.section`
    background-color: #000000bb;
	position: absolute;
	left: 0;
	top: 0;
	height: 100vh;
	width: 100vw;
	z-index: 10;
	display: flex;
	align-items: center;
	justify-content: center;
    color: #999;

    .primary-color {
        color: #000;
    }

    .spellbook-content {
		width: 95%;
		height: 95%;
		display: flex;
        flex-direction: column;
		justify-content: center;
		padding: 32px;
		border: 3px solid #32b;
		border-radius: 12px;
		background-color: #fff;
		position: relative;

        .modal-close {
			position: absolute;
			top: 0;
			right: 0;
			padding: 6px 12px;
			font-size: 32px;
			line-height: 32px;
			font-weight: 700;
		}
    }

    .spellbook-header {
        min-height: 24px;

        .header-text {
            padding: 6px 0;
            font-size: 20px;
            font-weight: 700;
        }
        .school-select-container {
            margin: 0 24px;
        }
        .school-select {
            outline: none;
            padding: 6px;
            border: 0;
            border-bottom: 1px solid #4da2ff;
            background-color: transparent;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 20px;

            &:disabled {
                color: #999;
                border-bottom-color: #900;
            }
        }
        .label {
            position: relative;
            display: inline-block;
            width: 43px;
            height: 24px;
            margin-right: 100px;
            
            .toggle-checkbox {
                height: 0;
                width: 0;
                display: inline-block;
    
                &:checked + .toggle {
                    background-color: #b32;
                    &::before {
                        left: 20px;
                    }
                }
            }
            .toggle {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #4da2ff;
                transition: .3s;
                border-radius: 24px;

                &::before {
                    content: '';
                    position: absolute;
                    height: 22px;
                    width: 22px;
                    background-color: #fff;
                    border-radius: 50%;
                    left: 1px;
                    bottom: 1px;
                    transition: .3s;
                }
            }
            .label-text {
                position: absolute;
                left: 100%;
                width: max-content;
                line-height: 32px;
                cursor: pointer;
                line-height: 24px;
                font-size: 20px;
                font-weight: 700;
                padding-left: 12px;
            }
        }
    }
    .spellbook-main {
        margin-top: 24px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        &.change-locked {
            .spell-button {
                color: #800;
                
                &.known-spell {
                    color: #fff;
                    background-color: #4da2ff;
        
                    &:after {
                        background-color: #4da2ff;
                    }
                }
            }
        }
    }
    .spellbook-rows {
        height: 100%;
    }
    .spellbook-description {
        height: 60px;
        max-height: 60px;
        overflow: scroll;
        margin: 24px 0 0;
    }
    .school-row {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
        width: 100%;
        height: 10%;
        border-bottom: 1px solid #aaa;

        &.primary {
            color: #000;

            .school-field {
                text-transform: uppercase;
            }
        }
        &.aligned {
            color: #333;
        }
        &.opposed {
            color: #e99;
        }
    }
    .spell-button {
        position: relative;
        height: calc(100% - 12px);
        width: calc(100% - 12px);
        background-color: #add4ff;
        border: 0;
        border-radius: 12px;
        color: #111;

        &.known-spell {
            color: #fff;
            background-color: #4da2ff;

            &:after {
                background-color: #4da2ff;
            }
        }

        &:after {
            position: absolute;
            top: -5px;
            right: -5px;
            content: attr(data-casting-number);
            background-color: #add4ff;
            padding: 2px 0;
            width: 20px;
            border-radius: 50%;
        }
    }
    .school-field {
        display: flex;
        align-items: center;
        font-weight: 700;
        padding-left: 12px;
    }
    .spell-field {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spell-name-description {
        .name {
            margin-right: 12px;
        }
        .description {
            padding: 12px 0;
        }
    }

    .casting-result-container {
        margin: 12px 0 0;
        height: 40px;
        max-height: 40px;
        font-size: 16px;
        width: 100%;
        
        .casting-result {
            display: inline-block;
            text-align: center;
            width: 70%;

            &.second {
                width: 30%;
            }
            strong {
                font-size: 24px;
                margin: 0 6px;
                color: #777;
            }
            svg {
                margin-bottom: -4px;
            }
            &.success {
                border: 2px solid #069;

                strong {
                    color: #047;
                }
            }
            &.failure {
                border: 2px solid #c20;
                
                strong {
                    color: #c20;
                }
            }
        }
    }
`;

export default StyledSpellbookModal;