import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBusinessProductServiceFidelityComponent } from './public-business-product-service-fidelity.component';

describe('PublicBusinessProductServiceFidelityComponent', () => {
  let component: PublicBusinessProductServiceFidelityComponent;
  let fixture: ComponentFixture<PublicBusinessProductServiceFidelityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBusinessProductServiceFidelityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicBusinessProductServiceFidelityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
