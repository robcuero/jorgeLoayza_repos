import { createSlice } from '@reduxjs/toolkit';
import { PAGINATION } from '../../../shared/constants';

export const listsSlice = createSlice({
	name: 'list',
	initialState: {
		list: [],
		listfilter: [],
		detail: {
			id: '',
			name: '',
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
	},
	reducers: {
		startLoadLists: (state) => {
			state.loading = true;
		},
		setLists: (state, action) => {
			state.loading = false;
			state.list = action.payload.pokemons;
			state.listfilter = action.payload.pokemons;
			let object: any = action.payload.pokemons.slice(0, PAGINATION);
			state.listShow.show = [];
			object.forEach((value) => {
				state.listShow.show.push({ nombre: value.name, id: value.id });
			});
		},
		setNextShow: (state, action) => {
			state.loading = false;
			if (action.payload === 'next') {
				state.listShow.pagination = state.listShow.pagination + PAGINATION;
			} else {
				state.listShow.pagination = state.listShow.pagination - PAGINATION;
			}
			let object: any = state.listfilter.slice(
				state.listShow.pagination,
				state.listShow.pagination + PAGINATION
			);
			state.listShow.show = [];
			object.forEach((value) => {
				state.listShow.show.push({
					nombre: value.name,
					id: value.id
				});
			});
		},
		setDetail: (state, action) => {
			state.loading = false;
			state.detail = action.payload;
		},
		filteredLists: (state, action) => {
			state.listfilter = state.list.filter((p: any) =>
				p.name.toLowerCase().includes(action.payload.value)
			);
			state.listShow.pagination = 0;
			let object: any = state.listfilter.slice(
				state.listShow.pagination,
				state.listShow.pagination + PAGINATION
			);
			state.listShow.show = [];
			object.forEach((value, index) => {
				state.listShow.show.push({
					nombre: value.name,
					id: value.id
				});
			});
		}
	}
});

export const {
	startLoadLists,
	setLists,
	filteredLists,
	setNextShow,
	setDetail
} = listsSlice.actions;
