import { setDetail, setLists } from '../store/slices/lists/listsSlice';

import { PokemonDetailResponse } from '../interfaces/PokemonDetailResponse';
import { PokemonResponse } from '../interfaces/PokemonResponse';

import { formatDetail } from '../utils/formatDetail';
import { formatList } from '../utils/formatList';

import api from '../store/api/pokemonApi';

export const getLists = () => {
	return async (dispatch) => {
		try {
			const response = await api.get<PokemonResponse>('pokemon');
			const pokemonList = formatList(response.data.results);
			dispatch(setLists({ pokemons: pokemonList }));
		} catch (err) {}
	};
};

export const getDetail = (id: string) => {
	return async (dispatch) => {
		try {
			const response = await api.get<PokemonDetailResponse>(`pokemon/${id}`);
			const pokemonDetail = formatDetail(response.data);
			dispatch(setDetail(pokemonDetail));
		} catch (err) {}
	};
};
