import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService implements OnInit {
  arrOfProductIds: number[] = []

  // Constructor function
  constructor(private httpClient: HttpClient) {
    this.arrOfProductIds = this.getAllProdustsIds();
    // console.log("Ids: " + this.arrOfProductIds);

  }

  // initialize on reload
  ngOnInit(): void {

  }

  // get all products
  getAllProductsAPI(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.API}/products`);
  }

  // get all products ids
  getAllProdustsIds(): number[] {
    let arrOfProductIdsfun: number[] = [];
    this.getAllProductsAPI().subscribe({
      next: (data) => {
        // console.log(data);
        arrOfProductIdsfun = data.map((product) => {
          return product.id;
        });
        // console.log(arrOfProductIds);
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    })
    // console.log("funID:"+arrOfProductIdsfun);

    return arrOfProductIdsfun;
  }

  // get product by id
  getProductByIdAPI(id: number): Observable<IProduct> {
    console.log('id: ' + id);
    return this.httpClient.get<IProduct>(`${environment.API}/products/${id}`);
  }



  // check product id
  // checkProductId(id: number): Observable<IProduct> {
  //   return this.httpClient.get<IProduct>(`${environment.API}/products/${id}`);
  // }
}
