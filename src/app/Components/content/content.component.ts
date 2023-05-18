import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscountOffers } from 'src/app/Models/discount-offers';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { Store } from 'src/app/Models/store';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { CategoryAPIService } from 'src/app/services/category-api.service';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  productList: IProduct[] = [];
  ngOnInit(): void {
    // this.filterProduct = this.prdService.productList;
    this.prdApiService.getAllProductsAPI().subscribe({
      next: (data) => {
        this.productList = data;
        this.filterProduct = this.productList;
      },
      error: (err) => {
        console.log(`Get Products From API Error: ${err}`);
      }
    });
    this.catApiService.getAllCategoriesAPI().subscribe({
      next: (data) => {
        this.category = data;
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    });

  }
  constructor(private prdService: ProductsService, private cart: CartServiceService, private catApiService: CategoryAPIService,
    private router: Router, private prdApiService: ProductsWithApiService, private httpClient: HttpClient) {
  }

  //Filter by price from parent
  private priceFelValue: number = 0;
  @Input() get priceFel(): number {
    return this.priceFelValue;
  }
  set priceFel(value: number) {
    this.priceFelValue = value;
    this.filterProduct = this.filterPrice(value);
  }
  filterPrice(price: number): IProduct[] {
    // console.log(price);
    if (price == 0 || price == null) {
      return this.prdService.productList;
    }
    return this.prdService.productList.filter(p => p.price <= price);
  }

  //Filter by category from parent
  catSelected: ICategory = { id: 5000, name: "Chosen category" };
  @Input() get categorySelected(): ICategory {
    return this.catSelected;
  }
  set categorySelected(value: ICategory) {
    this.catSelected = value;
    console.log("cat "+value.name);
    this.filterCategory(this.catSelected);
  }
  filterCategory(cat: ICategory) {
    console.log("catFilter "+cat.name);
    if (cat.id == this.category[0].id) {
        this.filterProduct = this.productList;
    } else {
      this.filterProduct = this.productList.filter(p => {
        return p.categoryId == cat.id;
      })
    }
  }
  getCategoryName(id:number):string{
    let catName = this.category.find(c => c.id == id)
    return catName!.name;
  }
  category: ICategory[] = [];
  filterProduct: IProduct[] = [];
  clientName: string = "Kareem SmeTh";
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
    product.quantity--;
    console.log(product.quantity);
  }
  //Event Emiter
  @Output() newCartProductEvent: EventEmitter<IProduct[]> = new EventEmitter<IProduct[]>();
  // Cart Function Handling
  cartProduct: IProduct[] = [];
  cartQuantity: any[] = [{
    id: 0,
    quantity: 0,
  }];
  @Output() newCartQuantityEvent: EventEmitter<any[]> = new EventEmitter<any[]>();
  addToCartFunc(product: IProduct) {
    if (this.cartProduct.includes(product)) {
      this.cartQuantity.forEach(e => {
        if (e.id == product.id) {
          e.quantity++;
        }
      })
    } else {
      this.cartProduct.push(product);
      let obj = {
        id: product.id,
        quantity: 1,
      }
      this.cartQuantity.push(obj);
    }
    // console.log(this.cartProduct);
    // console.log(this.cartQuantity);

    // Fire Event
    this.newCartProductEvent.emit(this.cartProduct);
    this.newCartQuantityEvent.emit(this.cartQuantity)
  }
  goToDetail(id: number) {
    this.prdService.checkProductId(id)
      ? this.router.navigate(['/group/prd', id])
      : this.router.navigate(['**']);
  }

}
