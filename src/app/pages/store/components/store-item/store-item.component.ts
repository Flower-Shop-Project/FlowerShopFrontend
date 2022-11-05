import { Component, Input, OnInit } from '@angular/core';
import { StoreItem } from 'src/app/models/StoreItem.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  @Input() product: StoreItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    console.log('Add to cart' + this.product?.name);
  }
}
