import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Detail } from '.';
import configureStore from 'redux-mock-store';
import { store } from '../../../store';
const initialState = {
	lists: {
		list: [],
		listfilter: [],
		detail: {
			id: '',
			name: 'test',
			sprites: [],
			weight: '',
			movesFormat: [],
			types: []
		},
		listShow: {
			pagination: 0,
			show: [{}]
		},
		loading: false
	}
};
describe('Button component', () => {
	it('Should render Detail store with data', async () => {
		const mockStore = configureStore();
		let store;
		store = mockStore(initialState);
		render(
			<Provider store={store}>
				<Detail />
			</Provider>
		);
		screen.getByText('Movimientos');
		screen.getByText('Types');
	});

	it('Should render Detail store with null', async () => {
		render(
			<Provider store={store}>
				<Detail />
			</Provider>
		);
		screen.getByText('Escoje un pokemon');
	});
});
