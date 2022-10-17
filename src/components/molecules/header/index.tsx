import { HeaderWrapper } from './styles';
import { Input } from '../../atoms';

export const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<h1 className='alignTitle'>Listado de Pokemon</h1>
			<Input value={'dd'} placeholder={'aaaa'} />
		</HeaderWrapper>
	);
};
