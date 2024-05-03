import styled from '@emotion/styled';

const StyledSoldiersContainer = styled.section`
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	margin-top: 12px;

	.highlighted {
		position: relative;
		color: #fff;
		background-color: #680; 
		border: 1px solid #680;
		&::before {
			content: "^";
			position: absolute;
			left: 12px;
			font-size: 24px;
		}
	}

	.soldier-header {
		width: 100%;
		display: grid;
		font-size: 1rem;
		grid-template-columns: 4fr 6fr 6fr 3fr;

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
		height: 100%;
		font-size: 1rem;
		font-weight: var(--bold);
		text-align: left;
		padding-left: 6px;

		&:focus {
			outline: 1px solid #24c;
		}
	}

	.padding-0 {
		padding: 0;
	}
	.soldier-type-select {
		border: 0;
		outline: none;
		background-color: transparent;
		text-transform: uppercase;
		width: calc(100% - 12px);
		height: 100%;
		text-align: left;
		font-size: .75rem;
		font-weight: var(--bold);

		&:focus {
			outline: 1px solid #24c;
		}
	}
	.soldier-remove {
		color: #d22;

		a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;
		}
		svg {
			width: 20px;
			height: 20px;
		}
	}
	
	.stats-line {
		display: grid;
		grid-template-columns: 2fr 2fr 2fr 2fr 2fr 4fr 2fr 3fr;
        font-size: .75rem;
		
		span {
			min-height: 33px;
			display: flex;
			flex-direction: column;
		}
		
		.stats-field {
			border: 0;
			padding: 0;

			&:last-child {
				span:last-child {
					font-size: .5rem;
					display: flex;
					justify-content: center;
					overflow: hidden;
					max-height: 33px;
				}
			}
		}
		.health-field {
			flex-direction: row;
			justify-content: center;
			align-items: center;
			padding: 5px 0px;

            .divider {
                margin: 0 2px 0 4px;
            }
            .health-select {
                font-size: inherit;
                font-family: inherit;
                font-weight: inherit;
                background-color: transparent;
                border: none;
                width: 48px;
                align-items: center;

                :focus {
                    outline: 0;
                }
            }
		}
	}
	@media screen and (min-width: 600px) {
        .soldier-header, .stats-line {
            font-size: 1rem;
        }
    }
`

export default StyledSoldiersContainer;