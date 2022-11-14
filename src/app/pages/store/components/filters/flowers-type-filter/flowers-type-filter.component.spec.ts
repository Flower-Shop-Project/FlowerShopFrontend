import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowersTypeFilterComponent } from './flowers-type-filter.component';

describe('FlowersTypeFilterComponent', () => {
  let component: FlowersTypeFilterComponent;
  let fixture: ComponentFixture<FlowersTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlowersTypeFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlowersTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
