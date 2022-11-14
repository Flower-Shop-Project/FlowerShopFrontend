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

  constructor() {
   }

  ngOnInit(): void {
      
  }

  SelectedFlowerTypesChangeHandler($event:any){
    console.log('Selected flowers:' + $event);
  }

}
