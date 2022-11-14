import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreItem, MOCKPRODUCTS } from '../models/StoreItem.model';
import { StoreItemsFilter } from '../models/StoreItemsFilter.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private products = new Subject<Array<StoreItem>>();
  products$: Observable<Array<StoreItem>> = this.products.asObservable();



  api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllProducts(): void {
    this.http.get<Array<StoreItem>>(this.api + 'Product/GetAll').subscribe(next=>{
      this.products.next(next);
    });
  }

  getFiltredProducts(filter:StoreItemsFilter): void {
    let queryParams = new HttpParams();
  
    Object.entries(filter).forEach(([key, value]: [string, string | number | string[]]) => {
      if(value != null)
        queryParams = queryParams.appendAll({[key]: value});
    });

    this.http.get<Array<StoreItem>>(this.api + 'Product/GetByQuery?' + queryParams.toString()).subscribe(next=>{
      this.products.next(next);
    });
  }

  getMockProducts(): Array<StoreItem> {
    return MOCKPRODUCTS;
  }
}