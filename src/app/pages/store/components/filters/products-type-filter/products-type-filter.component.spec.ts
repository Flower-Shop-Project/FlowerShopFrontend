import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsTypeFilterComponent } from './products-type-filter.component';

describe('ProductsTypeFilterComponent', () => {
  let component: ProductsTypeFilterComponent;
  let fixture: ComponentFixture<ProductsTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsTypeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
