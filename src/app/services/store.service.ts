import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StoreItem, MOCKPRODUCTS } from '../models/StoreItem.model';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  products: Array<StoreItem> = [];
  api: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Array<StoreItem>> {
    return this.http.get<Array<StoreItem>>(this.api + 'Product/GetAll');
  }

  getMockProducts(): Array<StoreItem> {
    return MOCKPRODUCTS;
  }
}