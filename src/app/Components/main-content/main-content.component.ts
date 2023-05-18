import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';
import { CategoryAPIService } from 'src/app/services/category-api.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit{
  constructor(private prdService: ProductsService, private prdApiService: ProductsWithApiService,private catApiService: CategoryAPIService) {

  }
  ngOnInit(): void {
    this.catApiService.getAllCategoriesAPI().subscribe({
      next: (data) => {
        this.category = data;
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    });
  }
  // Filter
  filterdValue: number = 0;
  category: ICategory[] = [];
  catValue: ICategory = { id: 5000, name: "Chosen category" };
  changeDropValue(cat: ICategory) {
    //set Dropdown value
    this.catValue = cat;
    console.log(cat.name);

  }
  // Table display cart
  cartProduct: IProduct[] = [];
  addToCart(productInCart: any): void {
    this.cartProduct = productInCart;

    // console.log(this.cartProduct);

  }
  cartQuantity: any[] = [];
  addQuantity(quantity: any): void {
    this.cartQuantity = quantity;
    // console.log(this.cartQuantity);
  }
  getProductCartQuantity(product: IProduct): number {
    let value = 0;
    this.cartQuantity.forEach(e => {
      if (e.id == product.id) {
        console.log("True");
        console.log(e.quantity);
        value = e.quantity;
      }
    })
    return value;
  }
  //Delete From Cart
  deleteFromCart(prd: IProduct): void {
    let index = this.cartProduct.indexOf(prd);
    console.log(this.cartProduct.indexOf(prd));
    if (index != -1) {
      this.cartQuantity.forEach(e => {
        if (e.id == prd.id) {
          if (e.quantity > 1) {
            e.quantity = e.quantity - 1;
          }
          else {
            this.cartProduct.splice(index, 1)
          }
        }
      })
    }
  }
}
