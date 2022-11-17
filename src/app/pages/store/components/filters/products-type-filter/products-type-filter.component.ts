import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-type-filter',
  templateUrl: './products-type-filter.component.html',
  styleUrls: ['./products-type-filter.component.css']
})
export class ProductsTypeFilterComponent implements OnInit {

  typesOfProducts: any[] = [
    {displayedName:'Обгортка', selected:false, name:'basket'},
    {displayedName:'Букет', selected:false, name:'bouquet'}
  ];

  @Output() SelectedProductTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }


  selectionChange($event:any){
    let selectedOption = $event.options[0]._value;
    selectedOption.selected = !selectedOption.selected;

    this.typesOfProducts.filter(val=>val!=selectedOption).map(val=>{
      val.selected = false;
      return val;
    });

    this.SelectedProductTypeChanged.emit(selectedOption.selected ? selectedOption.name : null );
  }
}
