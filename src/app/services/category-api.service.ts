import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../Models/icategory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService implements OnInit, OnDestroy {
  subscriptions?: Subscription;
  constructor(private httpClient: HttpClient) {
    this.subscriptions = new Subscription();
  }
  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  };
  ngOnInit(): void {
    this.subscriptions?.add(this.getAllCategoriesAPI().subscribe({
      next: (data) => {
        this.category = data;
      },
      error: (err) => {
        console.log(`Get CAT From API Error: ${err}`);
      }
    }))
  };
  category: ICategory[] = [];
  getCategoryName(id: number): string {
    let catName: any = this.category.find(c => c.id == id)
    return catName?.name;
  };
  // Get All Categories
  getAllCategoriesAPI(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(`${environment.API}/category`);
  };

}
