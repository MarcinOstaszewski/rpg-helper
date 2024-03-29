import styled from '@emotion/styled';

const StyledModal = styled.section`
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
	
	.modal-content {
		padding: 0 2.5%;
		width: ${props => props.showRemoveContent ? "75%" : "100%"};
		height: ${props => props.showRemoveContent ? "75%" : "100%"};
		display: flex;
		justify-content: center;
		padding: 12px 0;
		border: 2px solid #666;
		border-radius: 12px;
		background-color: #fcfcfe;
		position: relative;

		.modal-close {
			position: absolute;
			top: 0;
			right: 0;
			padding: 6px 12px;
			font-size: 32px;
			line-height: 32px;
		}
	}

	.remove-soldier {
		.soldier-description {
			font-size: 28px;
			font-weight: 700;
			color: #e33;
			text-align: center;
			span {
				font-size: 28px;
			}
		}
	}

	.buttons {
		padding: 12px 0 0 0;
		display: flex;
		width: 100%;
		justify-content: space-around;

		button {
			padding: 12px;
			font-size: 16px;
			border-radius: 6px;
			border: 0;
			&:disabled {
				background-color: #ddd;
				color: #999;
				cursor: not-allowed;
			}
		}
		.danger {
			background-color: #fbb;
			&:hover:not(:disabled) {
				background-color: #eaa;
			}
		}
		.info {
			background-color: #adf;
			&:hover:not(:disabled) {
				background-color: #9ce;
			}
		}
		.success {
			background-color: #aec;
			&:hover:not(:disabled) {
				background-color: #9db;
			}
		}
		.warning {
			background-color: #fe7;
			&:hover:not(:disabled) {
				background-color: #ed6;
			}
		}
	}


	.content-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;

		h3 {
			color: #999;
			strong {
				color: #222;
			}
		}
		.title {
			padding: 9px 0;
			font-size: 16px;
		}
		.target-numbers-and-modifiers,
		.combat-settings,
		.damage-settings {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			max-width: 320px;
		}
		.tests-container {
			display: flex;
			max-width: 100%;
			overflow: auto;
			padding-bottom: 12px;
		}

		.display-results {
			display: flex;
			padding: 12px;
			font-size: 12px;
			width: 80%;
			justify-content: center;

			.value {
				display: flex;
				align-items: center;
				padding: 0px;
				flex-direction: column;

				span {
					padding: 1px;
				}
			}
			.text-bold {
				font-weight: 700;
			}
			& > span {
				display: flex;
				align-items: flex-end;
				margin-bottom: 3px;
			}
			svg {
				margin-bottom: 1px;
			}
			span {
				margin: 0;

				strong {
					margin-right: 12px;
				}
			}

			&.results-display {
				margin-top: 12px;
			}

			&.hidden {
				color: transparent;
			}

			&.success {
				color: #fff;
				background-color: #4a4;
				border-radius: 0 12px;
			}
			&.failure {
				color: #fff;
				background-color: #d22;
				border-radius: 12px 0;
			}
			&.draw {
				color: #fff;
				background-color: #666;
			}
			&-damage {
				margin-right: 12px;
			}

			svg {
				margin: 0 6px 2px;
			}
		}

		.target-numbers,
		.modifiers,
		.combat-opponent-fight,
		.damage-opponent-armour,
		.damage-weapon-modifiers {
			display: flex;
			flex-wrap: wrap;
			width: 80%;
			gap: 6px 12px;

			button {
				width: calc(20% - 10px);
				font-weight: 700;
				padding: 3px;
				font-size: 16px;
				background-color: #8df;
				border: 0;
				border-radius: 6px;
				&:hover,
				&.active {
					color: #fff;
				}
				&:hover {
					background-color: #38c;
				}
				&.active {
					background-color: #059;
				}
				&.minus {
					background-color: #f88;
					&:hover {
						background-color: #c44;
					}
					&.active {
						background-color: #a11;
					}
				}
				&.plus {
					background-color: #9d9;
					&:hover {
						background-color: #494;
					}
					&.active {
						background-color: #171;
					}
				}
			}
		}

		.damage-settings {
			display: flex;
			flex-direction: column;
			width: 40%;
			min-width: 220px;

			&.disabled {
				pointer-events: none;
				opacity: .4;
			}
		}

		.damage-opponent-armour,
		.damage-weapon-modifiers {
			width: 80%;
			button {
				width: calc(33.33% - 8px);
			}
		}

		.combat-settings-and-modifiers {
			display: flex;
			align-items: center;
			flex-direction: column;
		}

		.modal-close, button {
			cursor: pointer;
		}

		.unfocus {
			opacity: .7
		}
	}
`

export default StyledModal;