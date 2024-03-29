import styled from '@emotion/styled';

const StyledDirectionSwitch = styled.div`
	.tgl {
		display: none;
		
		// add default box-sizing for this scope
		&,
		&:after,
		&:before,
		& *,
		& *:after,
		& *:before,
		& + .tgl-btn {
			box-sizing: border-box;
			&::selection {
				background: none;
			}
		}
		
		+ .tgl-btn {
			outline: 0;
			display: block;
			width: 5.5em;
			height: 2em;
			position: relative;
			cursor: pointer;
			user-select: none;
			&:after,
			&:before {
				position: relative;
				display: block;
				content: "";
				width: 50%;
				height: 100%;
			}
			
			&:after {
				left: 0;
			}
			
			&:before {
				display: none;
			}
		}
		
		&:checked + .tgl-btn:after {
			left: 50%;
		}
		+ .tgl-btn {
			&.checked {
				transform: rotate(-90deg);
			}
		}
	}

	.tgl-flip {
		+ .tgl-btn {
			padding: 2px;
			transition: all .2s ease;
			font-family: sans-serif;
			perspective: 100px;
			&:after,
			&:before {
				display: inline-block;
				transition: all .4s ease;
				width: 100%;
				text-align: center;
				position: absolute;
				line-height: 2em;
				font-weight: bold;
				color: #fff;
				position: absolute;
				top: 0;
				left: 0;
				backface-visibility: hidden;
				border-radius: 4px;
			}
			
			&:after {
				content: attr(data-tg-on);
				background: #02C66F;
				transform: rotateY(-180deg);
			}
			
			&:before {
				background: #6762a8;
				content: attr(data-tg-off);
			}

			&:active:before {
				transform: rotateY(-20deg);
			}
		}
		
		&:checked + .tgl-btn {
			&:before {
				transform: rotateY(180deg);
			}
			
			&:after {
				transform: rotateY(0);
				left: 0;
				background: #1067b7;
			}
			
			&:active:after {
				transform: rotateY(20deg);
			}
		}
	}
`;

export default StyledDirectionSwitch;