import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plus-minus-button',
  templateUrl: './plus-minus-button.component.html',
  styleUrls: ['./plus-minus-button.component.css']
})
export class PlusMinusButtonComponent implements OnInit {
  value: number = 0;
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
    if (this.value > 0) {
      this.value--;
      this.valueChanged();
    }
  }

  valueChanged() {
    if (this.value == null) {
      this.value = 0;
    }
    if (this.value > 100) {
      this.value = 100;
    }
    console.log(this.value);
  }
}
