import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.reducer'; // Adjust the path

// Create a feature selector for the cart state
export const selectCartState = createFeatureSelector<CartState>('cart');

// Create a selector for the isCartOpen property
export const selectIsCartOpen = createSelector(
  selectCartState,
  (state: CartState) => state.isCartOpen
);

// Create a selector for the cartItems property
export const selectCartItems = createSelector(
  selectCartState,
  (state: CartState) => state.cartItems
);
