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
	
	.content {
			width: 50%;
			height: 50%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			align-items: center;
			border: 6px solid #d77;
			border-radius: 12px;
			background-color: #fdf2f2;

			div {
				font-size: 28px;
				&.soldier-name {
					font-size: 28px;
					font-weight: bold;
					color: #e33;
					span {
						font-size: 28px;

					}
				}
			}
	}


	.buttons {
			display: flex;
			width: 75%;
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
	}
`

export default StyledModal;