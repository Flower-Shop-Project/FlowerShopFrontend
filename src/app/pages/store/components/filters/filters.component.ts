import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() Drawer!: MatDrawer;
  searchInput: FormControl = new FormControl();
  typesOfFlowers: string[] = ['Ромашки', 'Хризантеми', 'Соняшники', 'Троянди', 'Півонії'];
  filteredOptions!:string[];
  flowersSet = new Map();

  constructor() {
    this.typesOfFlowers.forEach(item => {
      this.flowersSet.set(item, false);
    });

    this.filteredOptions = [...this.typesOfFlowers];
   }

  ngOnInit(): void {
    this.searchInput.valueChanges
      .subscribe(searchedItem => {
        this.filteredOptions = this.typesOfFlowers.filter(item =>
          item.toLowerCase().includes(searchedItem.toLowerCase())
        );
      });
      
  }

  selectionChange($event: any){
    this.flowersSet.set(
      $event.option.value,
      !this.flowersSet.get($event.option.value)
    );
  }

}
