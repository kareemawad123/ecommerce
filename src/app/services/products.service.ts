import { Injectable } from '@angular/core';
import { DiscountOffers } from '../Models/discount-offers';
import { IProduct } from '../Models/iproduct';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 category : ICategory[] = [
    {
      id: 1,
      name: "Shoes"
    },
    {
      id: 2,
      name: "Laptop"
    },
    {
      id: 3,
      name: "TVs"
    },
  ]
  productList: IProduct[] = [];
  arrOfProductIds: number[] =[]
  constructor() {
    this.productList = [
      {
        id: 103050,
        name: "Adidas Mens Nebzed Super",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 1,
        price: 300,
        img: "assets/adidas1.jpg",
        categoryId: this.category[0],
        descount: DiscountOffers.DISCOUNT10,
      },
      {
        id: 105036,
        name: "Apple 2023 MacBook Pro",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 6,
        price: 8000,
        img: "assets/apple1.jpg",
        categoryId: this.category[1],
        descount: DiscountOffers.DISCOUNT10,
      },
      {
        id: 105037,
        name: "Calvin Klein Men's Brodie Oxford",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',

        quantity: 0,
        price: 500,
        img: "assets/calvin2.jpg",
        categoryId: this.category[0],
        descount: DiscountOffers.NODISCOUNT,
      },
      {
        id: 105038,
        name: "UHD 4K TV 43 Inch UQ7500 Series",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',

        quantity: 10,
        price: 1000,
        img: "assets/tv1.png",
        categoryId: this.category[2],
        descount: DiscountOffers.DISCOUNT15,
      },
      {
        id: 105039,
        name: "ASUS Zenbook 13 OLED UX325EA",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',

        quantity: 10,
        price: 1500,
        img: "assets/asus1.jpg",
        categoryId: this.category[1],
        descount: DiscountOffers.DISCOUNT10,
      },
      {
        id: 105040,
        name: "Adidas bounce shoes running shoes for men",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',

        quantity: 0,
        price: 450,
        img: "assets/adidas2.jpg",
        categoryId: this.category[0],
        descount: DiscountOffers.NODISCOUNT,
      },
    ];
    this.arrOfProductIds = this.productList.map((product) =>{
      return product.id;
    })
   }
   getProducts(): IProduct[] {
     return this.productList;
   }
   getOneProduct(id:number): IProduct | undefined {
     return this.productList.find(p => p.id === id);
   }
   getProductsByCatId(id:number): IProduct[] | undefined {
     return this.productList.filter(p=> p.categoryId.id == id);
   }
   checkProductId(id:number): boolean {
    let flag = false;
    this.productList.forEach(p => {
      if (p.id === id) {
        flag = true;
      }
    });
    return flag;
   }
   addProduct(product: IProduct) {
     this.productList.push(product);
   }

}
