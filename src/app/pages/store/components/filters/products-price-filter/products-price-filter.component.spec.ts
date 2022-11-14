import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPriceFilterComponent } from './products-price-filter.component';

describe('ProductsPriceFilterComponent', () => {
  let component: ProductsPriceFilterComponent;
  let fixture: ComponentFixture<ProductsPriceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsPriceFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsPriceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
