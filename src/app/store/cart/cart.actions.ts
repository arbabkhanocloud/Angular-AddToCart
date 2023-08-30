// store/cart.actions.ts

import { createAction, props } from '@ngrx/store';
import { IItem } from 'src/app/components/items-list/items-list.model';

export const setIsCartOpen = createAction(
  '[Cart] Set Is Cart Open',
  props<{ isOpen: boolean }>()
);
export const addItemToCart = createAction(
  '[Cart] Add Item',
  props<{ item: IItem }>()
);
export const removeItemFromCart = createAction(
  '[Cart] Remove Item',
  props<{ item: IItem }>()
);
export const deleteItemFromCart = createAction(
  '[Cart] Delete Item',
  props<{ item: IItem }>()
);
