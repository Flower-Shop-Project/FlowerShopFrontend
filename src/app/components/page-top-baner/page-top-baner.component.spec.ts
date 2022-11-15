import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTopBanerComponent } from './page-top-baner.component';

describe('PageTopBanerComponent', () => {
  let component: PageTopBanerComponent;
  let fixture: ComponentFixture<PageTopBanerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTopBanerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTopBanerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
