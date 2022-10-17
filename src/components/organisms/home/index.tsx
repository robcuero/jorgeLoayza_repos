import { Header } from '../../molecules';
import { Detail } from '../../molecules/detail';
import { Footer } from '../../molecules/footer';
import { Pokemons } from '../../molecules/pokemons';
import { HomeWrapper } from './styles';

export const Home = () => (
	<HomeWrapper>
		<div className='body--resvert'>
			<Header />
			<div className='size'>
				<Pokemons />
				<Detail />
			</div>
			<Footer />
		</div>
	</HomeWrapper>
);
