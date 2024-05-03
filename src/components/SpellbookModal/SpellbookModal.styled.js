import styled from '@emotion/styled';

const StyledSpellbookModal = styled.div`
    --header-height: 30px;
    --footer-height: 120px;

    @media screen and (min-width: 800px) {
        --footer-height: 90px;
    }
    --casting-result-height: 48px;
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
		width: 100%;
		height: 100%;
		display: flex;
        flex-wrap: wrap;
        flex-direction: column;
		justify-content: flex-start;
		padding: 32px;
		border: 3px solid #32b;
		border-radius: 12px;
		background-color: #fff;
		position: relative;

        &.display-vertical {
            padding: 32px 20px;
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
        height: var(--header-height);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .header-text {
            display: block;
            padding: 6px 0 0;
            font-size: 12px;
            font-weight: 700;
        }
        .school-select-container {
            margin: 0 12px;
        }
        .school-select {
            outline: none;
            padding: 2px;
            border: 0;
            border-bottom: 1px solid #4da2ff;
            background-color: transparent;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 12px;

            @media screen and (min-width: 600px) {
                font-size: 20px;
            }

            &:disabled {
                color: #999;
                border-bottom-color: #900;
            }
        }
    }
    .spellbook-main {
        margin: 12px 0;
        padding-right: 12px;
        width: 100%;
        height: calc(100% - var(--header-height) - var(--footer-height) - 12px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        overflow-x: scroll;

        &.change-locked {
            .spell-button {
                color: #800;
                width: calc(100% - 12px);
                height: calc(100% - 12px);
                
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
     /* .spellbook-rows {
        // TODO: add styles for webkit scrollbar alway visible
        // and same for spell description in footer
    } */
    .school-row {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
        width: 100%;
        height: 10%;
        min-height: 60px;
        border-bottom: 1px solid #aaa;

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
        background-color: #add4ff;
        border: 0;
        border-radius: 12px;
        color: #111;
        font-size: .75rem;

        &.known-spell {
            color: #fff;
            background-color: #4da2ff;

            &:after {
                background-color: #4da2ff;
            }
        }
        
        &:after {
            font-size: .6rem;
            position: absolute;
            top: -5px;
            right: -5px;
            content: attr(data-casting-number);
            background-color: #add4ff;
            padding: 2px 0;
            height: 16px;
            line-height: 16px;
            width: 20px;
            border-radius: 50%;
        }
    }
    .school-field {
        display: flex;
        align-items: flex-end;
        padding: 12px 6px;
        position: relative;

        &::after {
            position: absolute;
            top: 12px;
            right: 6px;
            content: attr(data-school-type) ": +" attr(data-school-modifier);
            font-size: .7rem;
        }
    }
    .spell-field {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .spellbook-footer {
        position: fixed;
        bottom: 12px;
        left: 16px;
        right: 16px;
        background-color: #fff;
    }
    .spellbook-description {
        height: calc(var(--footer-height) - var(--casting-result-height));
        padding: 6px 0;
        margin: 0 6px 0 12px;
        
        .spell-name-description {
            overflow: scroll;
            height: 100%;
            padding-right: 6px;
        }

        .name {
            margin-right: 12px;
        }
    }
    .casting-result-container {
        max-height: var(--casting-result-height);
        font-size: 16px;
        width: 100%;

        .choose-your-spells {
            display: flex;
            justify-content: center;
            text-align: center;
            line-height: 1.5rem;
            text-transform: uppercase;
            font-weight: var(--bold);
            background-color: #4da2ff;
            color: #fff;
        }
        .casting-result {
            text-transform: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
		display: flex;

        .spellbook-rows {
            width: 100%;
            padding-right: 12px;
            overflow-y: scroll;
        }
        .school-row {
            grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            height: 160px;
        }
        .spell-button {
            position: absolute;
            height: 24px;
            width: 140px;
            transform-origin: 0 0;
            transform: rotate(270deg) translate(0, -50%);
            bottom: -20px;
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

    @media screen and (min-width: 600px) {
        .spellbook-content,
        .spellbook-content.display-vertical {
            padding: 12px;

            .spellbook-header {
                flex-wrap: nowrap;
                .header-text {
                    font-size: 20px;
                }
            }
            .spell-button {
                width: calc(100% - 12px);
                height: calc(100% - 12px);
            }
        }
    
    }
`;

export default StyledSpellbookModal;