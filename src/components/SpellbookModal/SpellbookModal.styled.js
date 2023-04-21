import styled from '@emotion/styled';

const StyledSpellbookModal = styled.div`
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
		justify-content: flex-start;
		padding: 32px;
		border: 3px solid #32b;
		border-radius: 12px;
		background-color: #fff;
		position: relative;

        &.display-vertical {
            padding: 32px 40px;
        }

        .direction-switch {
            position: absolute;
            left: 6px;
            top: 6px;
            &.checked {
                left: -22px;
                top: 34px;
            }
        }
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
        height: 40px;
        display: flex;
        justify-content: center;

        .header-text {
            padding: 6px 0 0;
            font-size: 20px;
            font-weight: 700;
        }
        .school-select-container {
            margin: 0 12px;
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
    }
    .spellbook-main {
        margin-top: 24px;
        width: 100%;
        height: calc(100% - 260px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;

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
    .school-row {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
        width: 100%;
        height: 10%;
        &:not(:last-of-type) {
            border-bottom: 1px solid #aaa;
        }
        &.primary {
            color: #000;

            .school-field {
                text-transform: uppercase;
                font-size: 14px;
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
        height: 100%;
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

    .spellbook-footer {
        height: 160px;
    }
    .spellbook-description {
        height: 40%;
        overflow: scroll;
        padding: 12px 12px 0 0;

        .name {
            margin-right: 12px;
        }
    }
    .casting-result-container {
        margin: 12px 0 0;
        height: 60%;
        font-size: 16px;
        width: 100%;
        
        .casting-result {
            display: block;
            text-align: center;
            padding: 12px 0;
            height: 100%;

            strong {
                font-size: 16px;
                margin: 0 4px 0 0;
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
    .spellbook-content.display-vertical {
		display: block;

        .spellbook-rows {
            width: 100%;
            padding-right: 24px;
            overflow-y: scroll;
        }
        .school-row {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            height: 160px;
        }
        .spell-button {
            position: absolute;
            height: 48px;
            width: 140px;
            transform-origin: 0 0;
            transform: rotate(270deg) translate(0, -50%);
            bottom: -40px;
            left: 50%;
        }
        .school-field {
            width: 100%;
            height: 160px;
            position: relative;
            text-align: left;
            top: 0; left: 0; right: 0; bottom: 0;
            margin-right: auto;
            
            .school-name {
                transform-origin: 0 0;
                transform: rotate(270deg) translate(0, -50%);
                position: absolute;
                bottom: 0; left: 50%;
            }
        }
        .spell-field {
            height: 160px;
            position: relative;
        }
    }
`;

export default StyledSpellbookModal;