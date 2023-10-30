import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductActComponent } from './product-act.component';

describe('ProductActComponent', () => {
  let component: ProductActComponent;
  let fixture: ComponentFixture<ProductActComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductActComponent]
    });
    fixture = TestBed.createComponent(ProductActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
