import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawer } from '@angular/material/sidenav';
import { distinctUntilChanged } from 'rxjs';
import { StoreItemsFilter } from 'src/app/models/StoreItemsFilter.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() Drawer!: MatDrawer;

  storeItemsFilter:StoreItemsFilter = {
    type: null,
    appointments: null,
    flowerTypes: null,
    minPrice: null,
    maxPrice: null,
    search: null
  };

  constructor(private storeServise: StoreService) {
   }

  ngOnInit(): void {
      
  }

  SelectedFlowerTypesChangeHandler($event:any){
    this.storeItemsFilter.flowerTypes = [...$event];
    this.storeServise.getFiltredProducts(this.storeItemsFilter);
  }

  PriceRangeChangeHandler($event:any){
    this.storeItemsFilter.minPrice = $event.minPrice;
    this.storeItemsFilter.maxPrice = $event.maxPrice;

    this.storeServise.getFiltredProducts(this.storeItemsFilter);
  }

  SelectedProductTypeChangeHandler($event:any){
    this.storeItemsFilter.type = $event;
    this.storeServise.getFiltredProducts(this.storeItemsFilter);
  }

  SelectedProductAppointmentsChangeHandler($event:any){
    this.storeItemsFilter.appointments = $event;
    this.storeServise.getFiltredProducts(this.storeItemsFilter);
  }

}
