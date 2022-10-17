import styled from 'styled-components';
import { device } from '../../../shared/size';

export const ListWrapper = styled.div`
	width: 100%;
	.block {
		cursor: pointer;
		margin: 0 auto;
		display: grid;
		gap: 1rem;
		grid-auto-rows: 31rem;
	}
	.block--details {
		padding: 14px;
		text-align: center;
		color: #3d3d3d;
		background-color: #b6aaff;
		border: 4px solid #7b67e8;
	}

	.size-img {
		width: 187px;
		height: 128px;
	}

	.align-left {
		text-align: left;
	}
	.sprites-size {
		background: #e2e2e2;
		border-radius: 25px;
		margin: 0px 3px 0px 3px;
	}

	.no-pokemons {
		margin-top: 160px;
		font-size: 22px;
	}
	@media ${device.laptopL} {
		margin-top:15px ;
	}
`;
