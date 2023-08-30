import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IItem } from '../components/items-list/items-list.model';
import * as CartActions from '../store/cart/cart.actions';
import { Observable } from 'rxjs';
import {
  selectIsCartOpen,
  selectCartItems,
} from '../store/cart/cart.selectors'; // Adjust the path

export interface CartItem {
  item: IItem;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  isCartOpen$ = this.store.select(selectIsCartOpen);
  cartItems$ = this.store.select(selectCartItems);

  constructor(private store: Store) {}

  toggleCart(): Observable<boolean> {
    return this.isCartOpen$;
  }

  itemsInCart(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  setIsCartOpen(open: boolean): void {
    this.store.dispatch(CartActions.setIsCartOpen({ isOpen: open }));
  }
  addItemToCart(item: IItem) {
    this.store.dispatch(CartActions.addItemToCart({ item }));
  }

  removeItemFromCart(item: IItem) {
    this.store.dispatch(CartActions.removeItemFromCart({ item }));
  }

  deleteItemFromCart(item: IItem) {
    this.store.dispatch(CartActions.deleteItemFromCart({ item }));
  }
}
