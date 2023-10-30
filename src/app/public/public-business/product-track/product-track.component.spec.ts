import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTrackComponent } from './product-track.component';

describe('ProductTrackComponent', () => {
  let component: ProductTrackComponent;
  let fixture: ComponentFixture<ProductTrackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductTrackComponent]
    });
    fixture = TestBed.createComponent(ProductTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
