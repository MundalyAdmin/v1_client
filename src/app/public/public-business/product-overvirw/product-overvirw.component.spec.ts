import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOvervirwComponent } from './product-overvirw.component';

describe('ProductOvervirwComponent', () => {
  let component: ProductOvervirwComponent;
  let fixture: ComponentFixture<ProductOvervirwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductOvervirwComponent]
    });
    fixture = TestBed.createComponent(ProductOvervirwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
