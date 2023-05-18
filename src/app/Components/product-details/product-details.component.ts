import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { CategoryAPIService } from 'src/app/services/category-api.service';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private prdService: ProductsService, private activeRoute: ActivatedRoute, private catApiService: CategoryAPIService
    , private router: Router,private prdApiService: ProductsWithApiService) {

  }
  prdId: number = 0;
  currentIndex: number = 0;
  product?: IProduct;
  arrOfProductIds: number[] = [];
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params => {
      this.prdId = Number(params.get('id'));
      this.product = this.prdService.getOneProduct(this.prdId);
      console.log(this.prdId);
      console.log(this.product);
    })
    // let prd = this.prdService.getProductsByCatId(1);
    // console.log(prd);

    // console.log(this.prdApiService.arrOfProductIds);
    // console.log(this.prdService.getOneProduct(this.prdId));

    this.prdApiService.getAllProductsAPI().subscribe({
      next: (data) => {
        // console.log(data);
        this.arrOfProductIds = data.map((product) =>{
          return product.id;
        });
        console.log(this.arrOfProductIds);
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    })
    // console.log(this.arrOfProductIds);
  }

  getCatName(number: number): string {
    return this.catApiService.getCategoryName(number)
  }

  goToPreviousProduct() {
    this.currentIndex = this.arrOfProductIds.indexOf(this.prdId);
    if (this.currentIndex > 0) {
      this.prdId = this.arrOfProductIds[this.currentIndex - 1];
      this.router.navigate(['/group/prd', this.prdId])
    }
  }
  goToNextProduct() {
    this.currentIndex = this.arrOfProductIds.indexOf(this.prdId);
    if (this.currentIndex < this.arrOfProductIds.length - 1) {
      this.prdId = this.arrOfProductIds[this.currentIndex + 1];
      this.router.navigate(['/group/prd', this.prdId])
    }
  }
  goBack() {
    this.router.navigate(["/group/Home"]);

  }
  addToCart(): void {
  }
  shopNow(): void {
  }

}
