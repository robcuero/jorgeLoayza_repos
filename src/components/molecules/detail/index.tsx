import { useSelector } from 'react-redux';
import { ListWrapper } from './styles';
import errorImage from '../../../assets/images/error-image.jpg';
import noPokemons from '../../../assets/images/no-pokemons.png';
import { RootState } from '../../../store/store';
import { Sprites } from './sprites';

export const Detail = () => {
	const { detail } = useSelector((state: RootState) => state.lists);
	return (
		<ListWrapper>
			{detail.name === '' ? (
				<div className='block'>
					<div className='block--details'>
						<div className='no-pokemons'>
							<img src={noPokemons} width={100} height={100} alt='' />
							<div>Escoje un pokemon</div>
						</div>
					</div>
				</div>
			) : (
				<div className='block'>
					<div className='block--details'>
						<img
							className='size-img'
							src={
								`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${detail.id}.png`
									.toLowerCase()
									.includes('http')
									? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${detail.id}.png`
									: errorImage
							}
							width={20}
							height={20}
							alt=''
						/>
						<div className='title'>#{detail.id}</div>
						<div className='title'>{detail.name}</div>
						<div className='align-left'>
							<div className='title'>Types</div>
							<div className='subtitle'>
								{detail.types?.map((value: any,index) => (
									<span key={index}>{value.type.name} </span>
								))}
							</div>
							<div className='title'>Peso</div>
							<div className='subtitle'>{detail.weight}</div>
							<div className='title'>Sprtyes</div>
						</div>
						<div className='size-date'></div>
						<div className='subtitle'>
							<Sprites sprites={detail.sprites} />
						</div>
						<div className='align-left'>
							<div className='title'>Movimientos</div>
							<div className='subtitle'>
								{detail.movesFormat?.map((value: any, index: number) => (
									<span key={index}>{value.move.name} </span>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</ListWrapper>
	);
};
