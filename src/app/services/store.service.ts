import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreItem, MOCKPRODUCTS, Product } from '../models/StoreItem.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<StoreItem>> {
    return this.http.get<Array<StoreItem>>(this.api + 'Product/GetAll');
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