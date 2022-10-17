import styled from 'styled-components';
import { InputProps } from '.';
import { device } from '../../../shared/size';

export const InputWrapper = styled.div<InputProps>`
	display: flex;
	padding-top: 10px;
	.input-wrapper {
		position: relative;
		width: 271px;
	}
	.input {
		box-sizing: border-box;
		color: #191919;
		padding: 1rem 1rem 1rem 3rem;
		width: 100%;
		border-radius: 0.25rem;
	}

	.input-svg {
		padding: 15px 15px 15px 5px;
	}

	.input-icon {
		color: #191919;
		position: absolute;
		width: 1.5rem;
		height: 1.5rem;
		left: 12px;
		top: 50%;
		transform: translateY(-50%);
	}

	@media ${device.tablet} {
		.input-wrapper {
			width: 170px;
		}
		.input {
			width: 295px;
		}
		.size--post {
			padding-left: 15px;
		}
	}
`;
