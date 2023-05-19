import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  http = {};
  constructor(private httpClient: HttpClient) {
    this.http = {
      headers: new HttpHeaders(
        { 'Content-Type': 'application/json' }
      )
    }
  }

  addProduct(newProduct: IProduct): Observable<IProduct>{
    return this.httpClient.post<IProduct>(`${environment.API}/products`,JSON.stringify(newProduct),this.http);
  }
  editProduct(product: IProduct):Observable<IProduct>{
    return this.httpClient.put<IProduct>(`${environment.API}/products/${product.id}`,JSON.stringify(product),this.http);
  }
  deleteProduct(product: IProduct):Observable<IProduct>{
    return this.httpClient.delete<IProduct>(`${environment.API}/products/${product.id}`,this.http);
  }


}
