import {
	PokemonDetailResponse
} from '../interfaces/PokemonDetailResponse';

export const formatDetail = (data: PokemonDetailResponse) => {
	const { sprites, name, weight, id, moves, types } = data;
	const {
		back_default,
		back_female,
		back_shiny,
		back_shiny_female,
		front_shiny
	} = sprites;
	const movesFormat = moves.slice(0, 8);
	const detail = {
		id,
		name,
		sprites: [
			back_default,
			back_female,
			back_shiny,
			back_shiny_female,
			front_shiny
		],
		weight,
		movesFormat,
		types
	};

	return detail;
};
