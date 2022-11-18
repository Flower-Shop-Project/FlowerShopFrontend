import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StoreItem, MOCKPRODUCTS, Product } from '../models/StoreItem.model';
import { Observable, Subject } from 'rxjs';
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

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(this.api + 'Product/' + id);
  }

  getPopularProducts(): Observable<Array<StoreItem>> {
    return this.http.get<Array<StoreItem>>(this.api + 'Product/GetAll');
  }

  getRoses(): Observable<Array<StoreItem>> {
    return this.http.get<Array<StoreItem>>(this.api + 'Product/GetByQuery?FlowerTypes=roses');
  }

  getChrys(): Observable<Array<StoreItem>> {
    return this.http.get<Array<StoreItem>>(this.api + 'Product/GetByQuery?FlowerTypes=chrysanthemums');
  }

  searchProduct(params: Params) {
    return this.http.get<Array<StoreItem>>(this.api + 'Product/GetByQuery', { params });
  }
}