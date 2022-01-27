import { createAction, props } from '@ngrx/store';
export const getItems = createAction(
  '[items] get items',
  props<{ category: string }>()
);

export const getItems2 = createAction(
  '[items] get items2',
);

export const loadItems = createAction(
  '[items] load items',
  props<{ items: any[] }>()
);

export const setItems = createAction(
  '[items] set items',
  props<{ items: any[] }>()
)
