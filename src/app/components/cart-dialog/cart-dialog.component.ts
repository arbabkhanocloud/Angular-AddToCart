import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.scss'],
})
export class CartDialogComponent {
  @Input() cartItems: CartItem[];
  getTotalPrice(): number {
    let total:number= 0;
    for (const item of this.cartItems) {
      total = total + item.quantity * item.item.price;
    }
    return total;
  }
  getTotalItems(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.quantity;
    }
    return total;
  }
}
