import { Injectable } from '@angular/core';
import { PRODUCTS } from 'src/app/models/Mock/mock-products';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  products: Array<Product> = PRODUCTS;
  constructor() { }

  getProducts(): Array<Product> {
    return this.products;
  }
}
