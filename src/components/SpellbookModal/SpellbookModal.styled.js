import styled from '@emotion/styled';

const StyledSoldiersContainer = styled.section`
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
    color: #219;

    .spellbook-content {
		width: 95%;
		height: 95%;
		display: flex;
        flex-direction: column;
		justify-content: center;
		padding: 32px;
		border: 3px solid #32b;
		border-radius: 12px;
		background-color: #f2f1f9;
		position: relative;

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
        min-height: 24px;

        .header-text-field {
            padding: 6px 24px 6px 0;
            font-size: 20px;
            font-weight: 700;
        }
        .header-text-field:not(:first-of-type) {
            padding-left: 24px;
        }
        .primary-school-select {
            outline: none;
            padding: 6px;
            border: 0;
            border-bottom: 1px solid #32b;
            background-color: transparent;
            font-weight: 700;
            text-transform: uppercase;
            color: #32b;
            font-size: 20px;
        }
    }
    .spellbook-main {
        margin-top: 24px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;

        .spell-name-description {
            padding: 24px 0;
            min-height: 160px;
            .name {
                font-weight: 700;
                margin-right: 12px;
            }
            .description {
                
            }
        }
    }
    .school-row {
        display: grid;
        grid-template-columns: 3fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
        width: 100%;
        height: 10%;

        &.primary {
            color: #fff;
            background-color: #65e;
        }
        &.aligned {
            background-color: #ced4ff;
        }
        &.opposed {
            color: #910;
            background-color: #ffb3b3;

            .spell-button {
                background-color: #b32;
            }
        }
    }
    .school-row:not(:last-child) {   
        border-bottom: 1px solid #aaa;
    }
    .school-field {
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
    .spell-button {
        height: calc(100% - 12px);
        width: calc(100% - 12px);
        background-color: #32b;
        /* border: 1px solid #ccc; */
        border: 0;
        border-radius: 12px;
        color: #eee;
    }


`;

export default StyledSoldiersContainer;