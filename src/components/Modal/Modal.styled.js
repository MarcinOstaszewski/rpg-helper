import styled from '@emotion/styled';

const StyledModal = styled.div`
	background-color: #00000040;
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
		border: 6px solid #d77;
		border-radius: 12px;
		background-color: #fdf2f2;

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
					background-color: #6bf;
					border: 0;
					border-radius: 6px;
					&:hover {
						background-color: #7df;
					}
					&.minus {
						background-color: #e66;
						&.active {
							background-color: #b33;
						}
					}
					&.plus {
						background-color: #4c4;
						&.active {
							background-color: #080;
						}
					}
					&.active {
						background-color: #16a;
						color: #fff;
					}
				}
			}
		}
	}
`

export default StyledModal;