import { Injectable } from '@angular/core';
import { IItem } from '../components/items-list/items-list.model';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CartItem {
  item: IItem;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartOpenSubject = new BehaviorSubject<boolean>(false);
  isCartOpen$ = this.cartOpenSubject.asObservable();

  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  setIsCartOpen(open: boolean): void {
    this.cartOpenSubject.next(open);
  }
  toggleCart(): Observable<any> {
    return this.isCartOpen$;
  }

  itemsInCart(): Observable<CartItem[]> {
    return this.cartItems$;
  }

  addItemToCart(item: IItem): void {
    const cartItems = this.cartItemsSubject.getValue();
    const existingCartItem = cartItems.find((ci) => ci.item.id === item.id);

    if (existingCartItem) {
      existingCartItem.quantity++;
    } else {
      cartItems.push({ item, quantity: 1 });
    }

    this.cartItemsSubject.next(cartItems);

    // this.updateCartCountAndTotal();
  }

  removeItemFromCart(item: IItem): void {
    const cartItems = this.cartItemsSubject.getValue();
    const existingCartItem = cartItems.find((ci) => ci.item.id === item.id);

    if (existingCartItem && existingCartItem.quantity > 1) {
      existingCartItem.quantity--;
    } else {
      const updatedCartItems = cartItems.filter((ci) => ci.item.id !== item.id);
      this.cartItemsSubject.next(updatedCartItems);
    }

    // this.updateCartCountAndTotal();
  }

  deleteItemFromCart(item: IItem): void {
    const cartItems = this.cartItemsSubject.getValue();
    const updatedCartItems = cartItems.filter((ci) => ci.item.id !== item.id);
    this.cartItemsSubject.next(updatedCartItems);
  }

  private updateCartCountAndTotal(): void {
    const cartItems = this.cartItemsSubject.getValue();
    const cartCount = cartItems.reduce((acc, ci) => acc + ci.quantity, 0);
    const cartTotal = cartItems.reduce(
      (acc, ci) => acc + ci.item.price * ci.quantity,
      0
    );

    // this.cartOpenSubject.next(cartCount > 0);
  }
}
