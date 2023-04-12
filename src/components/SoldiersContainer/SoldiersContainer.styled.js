import styled from '@emotion/styled';

const StyledSoldiersContainer = styled.section`
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin-top: 12px;

	.highlighted {
		color: #111;
		background-color: #cdd;
		border-bottom: 3px solid #bcc;
		padding-bottom: 3px;
	}

	.soldier-header {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 6fr 2fr 4fr 2fr;
		&.specialist .highlighted {
			background-color: #cdc;
			border-bottom: 3px solid #bcb;
		}
	}

	span {
		border: 1px solid #ddd;
		padding: 6px;
		text-align: center;
	}

	.soldier-name {
		width: 100%;
		font-size: 16px;
		text-align: left;
		padding-left: 12px;
	}

	.soldier-type {
		border: 0;
		outline: none;
		width: 100%;
		text-align: left;
		padding-left: 12px;
	}
	.soldier-remove {
		font-weight: 700;
		color: #d22;

		svg {
			width: 20px;
			height: 20px;
			margin-bottom: -4px;
		}
	}
	
	.stats-line {
		display: grid;
		grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
		
		span {
			&:not(:last-child) {
				font-weight: 700;
			}
			display: flex;
			flex-direction: column;
		}
		
		.stats-field {
			border: 0;
			padding: 0;

			span:last-child {
				height: 20px;
			}
			&:last-child span:last-child {
				font-size: 75%;
				display: flex;
				justify-content: center;
			}
		}
		.health-field {
			flex-direction: row;
			justify-content: center;
            .divider {
                margin: 0 12px;
            }
            .health-select {
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                border: none;
                width: 40%;
                :focus {
                    outline: 0;
                }
            }
		}
	}
`

export default StyledSoldiersContainer;