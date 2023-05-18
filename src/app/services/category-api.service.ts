import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../Models/icategory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService implements OnInit {

  constructor(private httpClient: HttpClient) {

  };
  ngOnInit(): void {
    this.getAllCategoriesAPI().subscribe({
      next: (data) => {
        this.category = data;
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    })
  };
  category: ICategory[] = [];
  getCategoryName(id: number): string {
    let catName = this.category.find(c => c.id == id)
    return catName!.name;
  };
  // Get All Categories
  getAllCategoriesAPI(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.API}/category`);
  };

}
