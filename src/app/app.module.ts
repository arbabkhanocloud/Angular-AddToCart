import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';

import * as fromCreateCart from '../app/store/cart/cart.reducer';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './components/cart/cart.component';
import { CartDialogComponent } from './components/cart-dialog/cart-dialog.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    CartComponent,
    CartDialogComponent,
    CartItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    StoreModule.forRoot({ cart: fromCreateCart.reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
