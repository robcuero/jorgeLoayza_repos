import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { ListWrapper } from './styles';
import { getLists } from '../../../services/thunks';
import { InfoPokemon } from './infoPokemon';
export const Pokemons = () => {
	const dispatch = useDispatch();
	const { listShow } = useSelector((state: RootState) => state.lists);
	useEffect(() => {
		dispatch(getLists() as any);
	}, [dispatch]);

	return (
		<ListWrapper>
			{listShow.show.length === 0 ? (
				<div className='align-title'>No existen pokemones</div>
			) : (
				<InfoPokemon />
			)}
		</ListWrapper>
	);
};
