import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-flowers-type-filter',
  templateUrl: './flowers-type-filter.component.html',
  styleUrls: ['./flowers-type-filter.component.css']
})
export class FlowersTypeFilterComponent implements OnInit {

  searchInput: FormControl = new FormControl();
  typesOfFlowers: any[] = [
    {displayedName:'Хризантеми', name:'chrysanthemums'},
    {displayedName:'Рози', name:'roses'}
  ];
  filteredOptions!:any[];
  flowersSet = new Map();
  @Output() SelectedFlowerTypesChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() {
    this.typesOfFlowers.forEach(item => {
      this.flowersSet.set(item.displayedName, false);
    });

    this.filteredOptions = [...this.typesOfFlowers];
   }

  ngOnInit(): void {
    this.searchInput.valueChanges
      .subscribe(searchedItem => {
        this.filteredOptions = this.typesOfFlowers.filter(item =>
          item.displayedName.toLowerCase().includes(searchedItem.toLowerCase())
        );
      });
      
  }

  selectionChange($event: any){
    this.flowersSet.set(
      $event.options[0]._value.displayedName,
      !this.flowersSet.get($event.options[0]._value.displayedName)
    );

    let selectedFlowerTypes = this.typesOfFlowers.filter(item=>
      this.flowersSet.get(item.displayedName)).map(item=>item.name);
    console.log(selectedFlowerTypes);

    this.SelectedFlowerTypesChanged.emit(selectedFlowerTypes);
  }

}
