import styled from '@emotion/styled';

const StyledModal = styled.div`
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
		width: ${props => props.showRemoveContent ? "50%" : "85%"};
		height: ${props => props.showRemoveContent ? "50%" : "85%"};;
		display: flex;
		justify-content: center;
		padding: 12śpx 0;
		border: 6px solid #666;
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
			font-weight: bold;
		}
	}

	.content-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.remove-soldier {
		.soldier-name {
			font-size: 28px;
			font-weight: bold;
			color: #e33;
			span {
				font-size: 28px;
			}
		}
	}

	.buttons {
		display: flex;
		width: 100%;
		justify-content: space-around;

		button {
			padding: 12px 24px;
			font-size: 24px;
			border-radius: 12px;
			border: 0;
			&:disabled {
				background-color: #ccc;
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
	}

	.stat-test {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		h3 {
			color: #999;
			strong {
				color: #222;
			}
		}

		.test-settings {
			display: flex;
			width: 100%;

			.target-numbers-and-modifiers,
			.combat-settings {
				display: flex;
				flex-grow: 1;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
			}

			.title {
				padding: 12px 0;
				font-size: 16px;
			}

			.target-numbers-and-modifiers {
				.test-chosen-values, 
				.test-results {
					padding: 12px 24px;
					span {
						margin: 0 3px;
					}
				}
				.test-results {
					font-size: 16px;

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

					svg {
						margin: 0 12px -2px 5px;
					}
				}
			}

			.target-numbers,
			.modifiers,
			.combat-opponent-fight {
				display: flex;
				flex-wrap: wrap;
				width: 50%;
				gap: 6px 12px;

				button {
					width: calc(20% - 10px);
					font-weight: bold;
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

			.combat-settings-and-modifiers {
				display: flex;
				align-items: center;
				flex-direction: column;
			}
		}
		.modal-close, button {
			cursor: pointer;
		}
	}
`

export default StyledModal;