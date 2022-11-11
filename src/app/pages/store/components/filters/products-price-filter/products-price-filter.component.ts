import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectionList, MatSelectionListChange } from '@angular/material/list';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products-price-filter',
  templateUrl: './products-price-filter.component.html',
  styleUrls: ['./products-price-filter.component.css']
})
export class ProductsPriceFilterComponent implements OnInit {
  private readonly minValue = 0;
  private readonly maxValue = 100000;
  @ViewChild('priceOptions') priceOptions!: MatSelectionList;


  public optionList = [
    {value:500, type:'max', description:'До 500'},
    {value:3600, type:'max', description:'До 3600'},
    {value:500, type:'min', description:'Від 500'},
    {value:3600, type:'min', description:'Від 3600'},
    {value:10000, type:'min', description:'Від 10000'}
  ];
  

  readonly priceFilterForm = new FormGroup({
    minValue: new FormControl<number>(this.minValue, Validators.min(this.minValue)),
    maxValue: new FormControl<number>(this.maxValue, Validators.max(this.maxValue)),
  });

  ngOnInit(): void {
    this.priceFilterForm.valueChanges.subscribe(() => {
      const { minValue, maxValue } = this.priceFilterForm.controls;
      this.priceOptions.deselectAll();

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
  ngAfterViewInit(){
    this.priceOptions.selectionChange.subscribe((s: MatSelectionListChange) => {    
      
      const { minValue, maxValue } = this.priceFilterForm.controls;

      let option = s.options[0].value;
    
      if(option.type == 'max'){
        maxValue.setValue(option.value);
        minValue.setValue(this.minValue);
      }
      else if(option.type == 'min'){
        minValue.setValue(option.value);
        maxValue.setValue(this.maxValue);
      }

      this.priceOptions.deselectAll();
      s.options[0].selected = true;
  });
  }
}
