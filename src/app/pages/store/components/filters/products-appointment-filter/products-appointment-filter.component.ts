import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-appointment-filter',
  templateUrl: './products-appointment-filter.component.html',
  styleUrls: ['./products-appointment-filter.component.css']
})
export class ProductsAppointmentFilterComponent implements OnInit {
  public appointments: any[] = [
    {displayedName:'Для мами', name:'для мами'},
    {displayedName:'Для дівчини', name:'для дівчини'}
  ];

  @Output() SelectedProductAppointmentsChanged: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }


  selectionChange($event:any){
    this.SelectedProductAppointmentsChanged.emit($event.map((val: { _value: { name: string; }; })=>val._value.name));
  }
}
