import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import { Header } from '.';

describe('Button component', () => {
	it('Should render Header', async () => {
		render(
			<Provider store={store}>
				<Header />
			</Provider>
		);
		screen.getByText('Listado de Pokemon');
	});
});



