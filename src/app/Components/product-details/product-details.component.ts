import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryAPIService } from 'src/app/services/category-api.service';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  prdId: number = 0;
  currentIndex: number = 0;
  product?: IProduct;
  arrOfProductIds: number[] = [];
  subscriptions?: Subscription;
  // constructor function
  constructor(private prdService: ProductsService, private activeRoute: ActivatedRoute, private catApiService: CategoryAPIService
    , private router: Router, private prdApiService: ProductsWithApiService) {
      this.subscriptions = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  // on initialize page load
  ngOnInit(): void {
    // // get  product id from url
    this.subscriptions?.add(this.activeRoute.paramMap.subscribe(params => {
      this.prdId = Number(params.get('id'));
      console.log(this.prdId);
      // get spcific product
      this.prdApiService.getProductByIdAPI(this.prdId).subscribe({
        next: (prd)=>{
          this.prdId = prd.id;
          this.product = prd;
          console.log("product id: " + this.prdId);
        },
        error: (err)=>{
          console.log("product not found: " +err);
          this.router.navigate(['page-not-found']);
        }
      });
    }));



    // get all products ids
    this.subscriptions?.add(this.prdApiService.getAllProductsAPI().subscribe({
      next: (data) => {
        // console.log(data);
        this.arrOfProductIds = data.map((product) => {
          return product.id;
        });
        console.log(this.arrOfProductIds);
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    }))
  };

  // get product category name
  // getCatName(number: number): string {
  //   return this.catApiService?.getCategoryName(number)
  // };

  // get previous product
  goToPreviousProduct() {
    console.log("Go:" + this.arrOfProductIds[0]);

    this.currentIndex = this.arrOfProductIds.indexOf(this.prdId);
    if (this.currentIndex > 0) {
      this.prdId = this.arrOfProductIds[this.currentIndex - 1];
      this.router.navigate(['/group/prd', this.prdId])
    }
  };

  // get next product
  goToNextProduct() {
    this.currentIndex = this.arrOfProductIds.indexOf(this.prdId);
    if (this.currentIndex < this.arrOfProductIds.length - 1) {
      this.prdId = this.arrOfProductIds[this.currentIndex + 1];
      this.router.navigate(['/group/prd', this.prdId])
    }
  };

  // go to back page
  goBack() {
    this.router.navigate(["/group/Home"]);

  };

  // add to cart function
  addToCart(): void {
  };

  // shop now function
  shopNow(): void {
  }

}
