import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService implements OnInit{
  // arrOfProductIds: number[] =[]

  constructor(private httpClient: HttpClient) {

  }
  ngOnInit(): void {

  }

  getAllProductsAPI():Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.API}/products`);
  }

  // getAllProdustsIds():number[]{
  //   let arrOfProductIds!: number[];
  //   this.getAllProductsAPI().subscribe({
  //     next: (data) => {
  //       // console.log(data);
  //       arrOfProductIds = data.map((product) =>{
  //         return product.id;
  //       });
  //       // console.log(arrOfProductIds);
  //     },
  //     error: (err) => {
  //       console.log(`Get CAT From API Error: ${err}`);
  //     }
  //   })
  //   return arrOfProductIds;
  // }

  getProductByIdAPI(id: number):Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.API}/products/${id}`);
  }
}
