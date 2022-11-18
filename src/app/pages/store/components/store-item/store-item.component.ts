import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoreItem } from 'src/app/models/StoreItem.model';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css'],
  animations: [
    trigger('itemState', [
      state('closed', style({
        transform: 'scale(1)'
      })),
      state('open', style({
        'box-shadow': '0 0 10px rgba(0, 0, 0, 0.4)',
        'background-color': 'white',
        transform: 'scale(1.05)',
        'z-index': '2'
      })),
      transition('closed => open', animate('100ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})
export class StoreItemComponent implements OnInit {
  @Input() product: StoreItem | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  state = "closed";
  showButtons = false;
  actionsHidden = true;

  hover() {
    this.state = "open";
    this.showButtons = true;
    this.actionsHidden = false;
  }

  leave() {
    this.showButtons = false;
    this.state = "closed";
    this.actionsHidden = true;
  }

  addToCart() {
    console.log('Add to cart' + this.product?.name);
  }
}
