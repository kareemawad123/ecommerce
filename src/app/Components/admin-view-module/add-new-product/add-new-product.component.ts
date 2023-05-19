import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { CategoryAPIService } from 'src/app/services/category-api.service';
import { AdminService } from '../../../services/admin.service';
import { IProduct } from '../../../Models/iproduct';
import { ProductsWithApiService } from 'src/app/services/products-with-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.scss']
})
export class AddNewProductComponent implements OnInit {
  categories: ICategory[] = [];
  lastPId?: number;
  product: IProduct = {} as IProduct;
  productArrIds: number[] = [];
  formProductId: boolean = true;
  formIdValue?: number;

  constructor(private catApiService: CategoryAPIService, private adminApiService: AdminService,
    private prdApiService: ProductsWithApiService, private router: Router) {
    this.catApiService.getAllCategoriesAPI().subscribe(categories => {
      this.categories = categories;
      // console.log(this.categories);
    });

  };
  ngOnInit(): void {
    this.prdApiService.getAllProductsAPI().subscribe({
      next: (data) => {
        // console.log(data);
        this.productArrIds = data.map((product) => {
          return product.id;
        });
        this.productArrIds.forEach(id => {
          if (id == this.productArrIds[this.productArrIds.length - 1]) {
            this.lastPId = id;
          }
        })
        // console.log(this.productArrIds);
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    });
  };

  // detect category


  // Add or Edit Product to API
  addOrEditProduct() {
    if(this.formProductId){
      this.product['id'] = Number(this.lastPId) + 1;
      // console.log(this.product);
      // console.log(this.productArrIds);
      // console.log(this.lastPId);

      this.adminApiService.addProduct(this.product).subscribe(prd => {
        console.log(prd);
        this.router.navigate(['/group/Home']);
        // this.location.assign('/group/Home');
      })
    }else{
      this.adminApiService.editProduct(this.product).subscribe({
        next: (prd) => {
          console.log(prd);
          alert('Product updated successfully');
          this.router.navigate(['/group/Home']);
        },
        error:(err)=>{
          alert('Error With Edit Product' + err.message)
        }
      })
    }
  };

  // Delete Product from API
  deleteProduct() {
    if(!this.formProductId){
      if (this.formIdValue == 0 || this.formIdValue == undefined) {
        alert('Please enter Product id')

      }else{
        let confirmValue = confirm('Are you sure you want to delete this product');
        if(confirmValue){
          this.adminApiService.deleteProduct(this.product).subscribe({
            next: (prd) => {
              console.log(prd);
              alert('Product deleted successfully');
              this.router.navigate(['/group/Home']);
            },
            error:(err)=>{
              alert('Error With Delete Product' + err.message)
            },
          });
        };
      }
    };

  }
/*
    "id": 103050,
    "name": "Adidas Mens Nebzed Super updated",
    "discriptions": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ut. Assumenda tempora vitae itaque. Ducimus, adipisci commodi quae quod accusamus soluta saepe dolores, voluptate, quos ipsa velit nisi id dolorum?",
    "quantity": 5,
    "price": 350,
    "img": "assets/adidas1.jpg",
    "categoryId": 1,
    "descount": 7
*/
  // Form Id search Enable/Disable
  formIdField(): boolean {
    this.formProductId = !this.formProductId;
    return this.formProductId;
  };

  // Get Product details from Api to form fields
  searchForId(): void {
    console.log("Searching id: " + this.formIdValue);
    if(this.formIdValue != 0 && this.formIdValue != undefined) {
      this.prdApiService.getProductByIdAPI(this.formIdValue!).subscribe({
        next: (prd) => {
          console.log("product: " + prd);
          this.product = prd;
        },
        error: (err) => {
          console.log(`Product not found: ${err}`);
          alert("Product not found");
          this.formIdValue = 0;
        },
      })
    }
  }

}
