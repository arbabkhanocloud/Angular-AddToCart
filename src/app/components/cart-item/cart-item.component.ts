import { Component, Input } from '@angular/core';
import { IItem } from '../items-list/items-list.model';
import { CartItem } from 'src/app/services/cart.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {
  @Input() cartItem: CartItem;

  constructor(private cartService: CartService) {}

  ngOninit() {
    console.log('item', this.cartItem);
  }
  getItemPrice(): number {
    let total: number = 0;
    total = this.cartItem.quantity * this.cartItem.item.price;
    return total;
  }

  decrementItem(item: IItem) {
    this.cartService.removeItemFromCart(item);
  }
  incrementItem(item: IItem) {
    this.cartService.addItemToCart(item);
  }
  deleteItem(item: IItem) {
    this.cartService.deleteItemFromCart(item);
  }
}
