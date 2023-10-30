import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMeasureComponent } from './product-measure.component';

describe('ProductMeasureComponent', () => {
  let component: ProductMeasureComponent;
  let fixture: ComponentFixture<ProductMeasureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMeasureComponent]
    });
    fixture = TestBed.createComponent(ProductMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
