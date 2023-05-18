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
      id: 0,
      name: "All"
    },
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
        categoryId: 1,
        descount: 10,
      },
      {
        id: 105036,
        name: "Apple 2023 MacBook Pro",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 6,
        price: 8000,
        img: "assets/apple1.jpg",
        categoryId: 2,
        descount: 10,
      },
      {
        id: 105037,
        name: "Calvin Klein Men's Brodie Oxford",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',

        quantity: 0,
        price: 500,
        img: "assets/calvin2.jpg",
        categoryId: 1,
        descount: 0,
      },
      {
        id: 105038,
        name: "UHD 4K TV 43 Inch UQ7500 Series",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',

        quantity: 10,
        price: 1000,
        img: "assets/tv1.png",
        categoryId: 3,
        descount: 15,
      },
      {
        id: 105039,
        name: "ASUS Zenbook 13 OLED UX325EA",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',

        quantity: 10,
        price: 1500,
        img: "assets/asus1.jpg",
        categoryId: 2,
        descount: 10,
      },
      {
        id: 105040,
        name: "Adidas bounce shoes running shoes for men",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 0,
        price: 450,
        img: "assets/adidas2.jpg",
        categoryId: 1,
        descount: 0,
      },
      {
        id: 105041,
        name: "Samsung 32 Inch HD Smart LED TV ",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 5,
        price: 1200,
        img: "https://m.media-amazon.com/images/I/71iOlIb-3FL._AC_SX679_.jpg",
        categoryId: 3,
        descount: 10,
      },
      {
        id: 105042,
        name: "Jac 43 Inch LED Smart TV Black",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 8,
        price: 1500,
        img: "https://m.media-amazon.com/images/I/61mkbdLT+6S._AC_SX679_.jpg",
        categoryId: 3,
        descount: 15,
      },
      {
        id: 105043,
        name: "Samsung 43 Inch 4K UHD Smart LED TV",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 12,
        price: 1999,
        img: "https://m.media-amazon.com/images/I/41Ac27HbDDL._AC_SX679_.jpg",
        categoryId: 3,
        descount: 15,
      },
      {
        id: 105044 ,
        name: "Samsung 43 Inch Full HD Smart LED TV",
        discriptions: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?',
        quantity: 3,
        price: 1700,
        img: "https://m.media-amazon.com/images/I/61DOcUmc0EL._AC_SX679_.jpg",
        categoryId: 3,
        descount: 15,
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
  //  getProductsByCatId(id:number): IProduct[] | undefined {
  //    return this.productList.filter(p=> p.categoryId.id == id);
  //  }
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
