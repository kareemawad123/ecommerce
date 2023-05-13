import { Component, HostListener, OnInit, Input } from '@angular/core';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  ngOnInit(): void {
    this.filterProduct = this.productList;
  }
  constructor(){

  }
  filterProduct: IProduct[] = [];
  clientName: string = "Kareem SmeTh";
  @Input() category: ICategory[] = [
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
  stockFunc(product: IProduct): string {
    switch (product.quantity) {
      case 0: {
        return "out of stock";
      }
      case 1: {
        return "Last one item";
      }
      case 2: {
        return "Last two item";
      }
      default: {
        return "In stock";
      }
    }
  }
  productList: IProduct[] = [
    {
      id: 103050,
      name: "Adidas Mens Nebzed Super",
      quantity: 1,
      price: 300,
      img: "assets/adidas1.jpg",
      categoryId: this.category[0],
      descount: DiscountOffers.DISCOUNT10,
    },
    {
      id: 105036,
      name: "Apple 2023 MacBook Pro",
      quantity: 6,
      price: 8000,
      img: "assets/apple1.jpg",
      categoryId: this.category[1],
      descount: DiscountOffers.DISCOUNT10,
    },
    {
      id: 105037,
      name: "Calvin Klein Men's Brodie Oxford",
      quantity: 0,
      price: 500,
      img: "assets/calvin2.jpg",
      categoryId: this.category[0],
      descount: DiscountOffers.NODISCOUNT,
    },
    {
      id: 105038,
      name: "UHD 4K TV 43 Inch UQ7500 Series",
      quantity: 10,
      price: 1000,
      img: "assets/tv1.png",
      categoryId: this.category[2],
      descount: DiscountOffers.DISCOUNT15,
    },
    {
      id: 105039,
      name: "ASUS Zenbook 13 OLED UX325EA",
      quantity: 10,
      price: 1500,
      img: "assets/asus1.jpg",
      categoryId: this.category[1],
      descount: DiscountOffers.DISCOUNT10,
    },
    {
      id: 105040,
      name: "Adidas bounce shoes running shoes for men",
      quantity: 0,
      price: 450,
      img: "assets/adidas2.jpg",
      categoryId: this.category[0],
      descount: DiscountOffers.NODISCOUNT,
    },
  ];
  flag: boolean = true;
  favoriteFunc(event: any): void {
    console.log("SS");
    console.log(event.target.getAttribute('class'));
    var fav = event.target;
    if (fav?.getAttribute('class') == "fa-regular fa-heart") {
      fav?.setAttribute('class', "fa-solid fa-heart");
    } else {
      fav?.setAttribute('class', "fa-regular fa-heart");
    }
  }
  BuyFunc(product: IProduct) {
    console.log(product.quantity);
    product.quantity--;
    console.log(product.quantity);
  }

  // Dropdown menu
  catSelected: string = 'Choose a category';
  changeDropValue(cat: ICategory){
    this.catSelected = cat.name;
    this.filterProduct = this.productList.filter(p =>{
      return p.categoryId == cat;
    })
  }
  // Filltering

}
