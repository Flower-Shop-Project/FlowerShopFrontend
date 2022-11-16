import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-minus-button',
  templateUrl: './plus-minus-button.component.html',
  styleUrls: ['./plus-minus-button.component.css']
})
export class PlusMinusButtonComponent implements OnInit {
  value: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    if (this.value < 100) {
      this.value++;
      this.valueChanged();
    }
  }

  decrement() {
    if (this.value > 1) {
      this.value--;
      this.valueChanged();
    }
  }

  valueChanged() {
    if (this.value == null) {
      this.value = 1;
    }
    if (this.value > 100) {
      this.value = 100;
    }
    console.log(this.value);
  }
}
