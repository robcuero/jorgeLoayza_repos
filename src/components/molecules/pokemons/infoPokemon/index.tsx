import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../../../services/thunks';
import { BORDER, COLORS } from '../../../../shared/theme';
import { RootState } from '../../../../store';
import errorImage from '../.././../../assets/images/error-image.jpg';
import { ColorWrapper } from '../styles';
export const InfoPokemon = () => {
	const dispatch = useDispatch();
	const setDetail = (data: any) => {
		dispatch(getDetail(data.id) as any);
	};
	const { listShow } = useSelector((state: RootState) => state.lists);
	return (
		<div className='block'>
			{listShow.show.map((data: any,index) => (
                <ColorWrapper key={index} color={COLORS[index]} border={BORDER[index]}>
				<div
					className='block--details'
					onClick={() => {
						setDetail(data);
					}}
				>
					<img
						className='size-img'
						src={
							`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
								.toLowerCase()
								.includes('http')
								? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`
								: errorImage
						}
						width={20}
						height={20}
						alt=''
					/>
					<div className='title'>
                    <div>#{data.id}</div>
						<div>{data.nombre}</div>
						
					</div>
				</div>
                </ColorWrapper>
			))}
            
		</div>
	);
};
