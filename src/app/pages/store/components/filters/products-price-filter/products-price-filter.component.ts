import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products-price-filter',
  templateUrl: './products-price-filter.component.html',
  styleUrls: ['./products-price-filter.component.css']
})
export class ProductsPriceFilterComponent implements OnInit {
  private readonly minValue = 0;
  private readonly maxValue = 100000;
  private destroyed$: Subject<void> = new Subject();
  

  readonly priceFilterForm = new FormGroup({
    minValue: new FormControl<number>(this.minValue, Validators.min(this.minValue)),
    maxValue: new FormControl<number>(this.maxValue, Validators.max(this.maxValue)),
  });

  ngOnInit(): void {
    this.priceFilterForm.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => {
      const { minValue, maxValue } = this.priceFilterForm.controls;

      switch(true){
        case maxValue.invalid:
          maxValue.setValue(this.maxValue);
          break;
        case minValue.invalid:
          minValue.setValue(this.minValue);
          break;
        case minValue.value! > maxValue.value!:
          minValue.setValue(maxValue.value);
          break;
        case maxValue.value! < minValue.value!:
          maxValue.setValue(minValue.value);
          break;
      }
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
