import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PAGINATION } from '../../../shared/constants';
import { RootState } from '../../../store';
import { setNextShow } from '../../../store/slices/lists';
import { Buttons } from '../../atoms';
import './index.css';
export const Footer = () => {
	const dispatch = useDispatch();
	const { listfilter } = useSelector((state: RootState) => state.lists);
	const { pagination } = useSelector((state: RootState) => state.lists.listShow);
	const next = (next: string) => {
		dispatch(setNextShow(next));
	};

	return (
		<div className='button-wrapper'>
			<div onClick={() => next('prev')}>
				<Buttons
					variant={'primary'}
					message={'< Atras'}
					isDisabled={pagination === 0 ? true : false}
				/>
			</div>
			<div onClick={() => next('next')}>
				<Buttons
					variant={'primary'}
					message={'Siguiente >'}
					isDisabled={pagination+PAGINATION >= listfilter.length ? true : false}
				/>
			</div>
		</div>
	);
};
