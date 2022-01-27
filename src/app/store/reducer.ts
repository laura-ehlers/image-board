import {getItems, getItems2, loadItems, setItems} from './actions';
import { on, createReducer } from '@ngrx/store';

export interface State {
    items: any[],
    error: string,
}

export const initialState: State = {
    items: [],
    error: '',
};

export const ItemReducer = createReducer(
  initialState,
  on(loadItems, (state, action) => ({
    ...state,
    items: action.items
  })),
  on(getItems2, (state, action) => ({
    ...state
  })),
  on(setItems, (state, action) => ({
    ...state,
    items: action.items
  }))
);

export let selectItems = (state: State) => state.items;

export let selectError = (state: State) => state.error;
