import { ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { InputWrapper } from './styles';
import { SearchIcon } from '../../../assets/icons';
import { filteredLists } from '../../../store/slices/lists';

export interface InputProps {
	placeholder?: string;
	value?: string;
	width?: string;
}

export const Input: React.FC<InputProps> = ({ placeholder, value, width }) => {
	const dispacth = useDispatch();
	const inputRef = useRef<any>('');
	const onchange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = { value: event?.target.value };
		dispacth(filteredLists(value));
	};

	return (
		<InputWrapper width={width}>
			<div className='input-wrapper'>
				<input
					onChange={onchange}
					className='input'
					data-testid='id-input'
					type='text'
					placeholder='Buscar'
					ref={inputRef}
				/>
				<img src={SearchIcon} alt='Buscar' className='input-icon' />
			</div>
		</InputWrapper>
	);
};
