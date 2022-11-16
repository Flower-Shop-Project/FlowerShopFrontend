import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  checkAmountText = "сумма: 500 грн"
  checkAmount = 0

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToStore() {
    this.router.navigateByUrl("store");
  }

}
