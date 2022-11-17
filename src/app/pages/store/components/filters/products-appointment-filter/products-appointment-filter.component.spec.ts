import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsAppointmentFilterComponent } from './products-appointment-filter.component';

describe('ProductsAppointmentFilterComponent', () => {
  let component: ProductsAppointmentFilterComponent;
  let fixture: ComponentFixture<ProductsAppointmentFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsAppointmentFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsAppointmentFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
