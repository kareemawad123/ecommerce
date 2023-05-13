import { Component } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent {
  constructor(private cart:CartServiceService){
  }

  get Cart():IProduct[]{
    return this.cart.productInCart;
  }

}
