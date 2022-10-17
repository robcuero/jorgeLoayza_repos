import styled from 'styled-components';

export const ListWrapper = styled.div`
	width: 100%;
	.block {
		cursor: pointer;
		margin: 0 auto;
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 12rem), 3fr));
		grid-auto-rows: 15rem;
	}

	.size-title {
		font-size: 22px;
	}
	.size-date {
		font-size: 10px;
	}
	.size-img {
		width: 187px;
		height: 128px;
	}
`;
interface Color {
	color: string;
	border: string;
}

export const ColorWrapper = styled.div<Color>`
	text-align: center;
	color: #3d3d3d;
	background-color: ${(props) => props.color};
	border: 4px solid ${(props) => props.border};
	:hover {
		background-color: #c6d6e7;
	}
`;
