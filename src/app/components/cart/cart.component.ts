import { Component, Input } from '@angular/core';
import { IItem } from '../items-list/items-list.model';
import { CartService } from 'src/app/services/cart.service';
import { Subscription } from 'rxjs';
import { CartItem } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  itemsInCart: CartItem[];
  isCartOpen: boolean;
  isCartOpensubscription: Subscription;
  cartItemsubscriptio: Subscription;
  constructor(private cartService: CartService) {
    this.isCartOpensubscription = this.cartService
      .toggleCart()
      .subscribe((value) => (this.isCartOpen = value));
    this.cartItemsubscriptio = this.cartService
      .itemsInCart()
      .subscribe((value) => (this.itemsInCart = value));
  }

  onToggle() {
    console.log('cart ITem:', this.itemsInCart);
    console.log('iscartopne:', this.isCartOpen);
    this.cartService.setIsCartOpen(!this.isCartOpen);
  }
}
