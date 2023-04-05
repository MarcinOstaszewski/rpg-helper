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
		width: 75%;
		height: 75%;
		display: flex;
		justify-content: center;
		padding: 12śpx 0;
		border: 6px solid #666;
		border-radius: 12px;
		background-color: #fcfcfe;

		div {
			font-size: 28px;
		}
	}

	.content-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding-bottom: 24px;
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
		padding: 24px 0;

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
			background-color: #d77;
		}
		.info {
			background-color: #6bf;
		}
		.success {
			background-color: #4c9;
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

			.combat-settings-and-result,
			.combat-oponent-settings,
			.target-numbers-and-modifiers {
				display: flex;
				flex-grow: 1;
			}

			.target-numbers-and-modifiers {
				display: flex;
				align-items: center;
				flex-direction: column;
				justify-content: space-around;
				strong {
					font-size: 16px;
					padding: 12px 0;
					&.text-big span {
						font-size: 24px;
						line-height: 36px;
						margin: 0 12px;
					}
				}
			}

			.target-numbers, .modifiers {
				display: flex;
				flex-wrap: wrap;
				width: 50%;
				gap: 6px 12px;
				button {
					width: calc(20% - 10px);
					font-weight: bold;
					padding: 3px 0;
					background-color: #5ae;
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
						background-color: #d55;
						&:hover {
							background-color: #c44;
						}
						&.active {
							background-color: #a11;
						}
					}
					&.plus {
						background-color: #6b6;
						&:hover {
							background-color: #494;
						}
						&.active {
							background-color: #171;
						}
					}
				}
			}
		}
	}
`

export default StyledModal;