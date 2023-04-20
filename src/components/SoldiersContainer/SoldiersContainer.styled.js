import styled from '@emotion/styled';

const StyledSoldiersContainer = styled.section`
  display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin-top: 12px;

	.highlighted {
		color: #fff;
		background-color: #680; 
		border: 1px solid #680;
		padding-bottom: 3px;
	}

	.soldier-header {
		width: 100%;
		display: grid;
		grid-template-columns: 2fr 8fr 5fr 3fr;
		&.specialist .highlighted {
			background-color: #270;
			border: 1px solid #270;
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
		font-weight: 700;
	}

	.soldier-type {
		border: 0;
		outline: none;
		text-transform: uppercase;
		width: 100%;
		text-align: left;
		font-size: 12px;
		font-weight: 700;
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
		grid-template-columns: 2fr 2fr 2fr 2fr 2fr 3fr 2fr 3fr;
		
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
			padding: 6px 0px;

            .divider {
                margin: 0 2px;
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