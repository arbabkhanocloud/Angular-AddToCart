import { Component } from '@angular/core';
import { IItem } from './items-list.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent {
  items: IItem[] = [
    {
      id: 1,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'bnana',
      price: 5,
    },
    {
      id: 2,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'apple',
      price: 5,
    },
    {
      id: 3,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'orange',
      price: 5,
    },
    {
      id: 4,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'bnana',
      price: 5,
    },
    {
      id: 5,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'apple',
      price: 5,
    },
    {
      id: 6,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'orange',
      price: 5,
    },

    {
      id: 7,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'orange',
      price: 5,
    },
    {
      id: 8,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'bnana',
      price: 5,
    },
    {
      id: 9,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'apple',
      price: 5,
    },
    {
      id: 10,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'orange',
      price: 5,
    },
    {
      id: 11,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'bnana',
      price: 5,
    },
    {
      id: 12,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'apple',
      price: 5,
    },
    {
      id: 13,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'bnana',
      price: 5,
    },
    {
      id: 14,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'apple',
      price: 5,
    },
    {
      id: 15,
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      name: 'orange',
      price: 5,
    },
  ];

  constructor(private cartService: CartService) {}

  addItemToCart(item: IItem) {
    this.cartService.addItemToCart(item);
  }
}
