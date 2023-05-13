import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor() {
  }

  productInCart: IProduct[] = [];
  numberOfProducts: number = 0;
  addToCart(product: IProduct){
    if(!this.productInCart.includes(product)){
      console.log("not");
      this.productInCart.push(product);
    }else{
      console.log("yes");
    }
    console.log(this.productInCart);
  }
}
