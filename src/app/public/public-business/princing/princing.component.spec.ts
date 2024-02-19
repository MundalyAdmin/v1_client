import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincingComponent } from './princing.component';

describe('PrincingComponent', () => {
  let component: PrincingComponent;
  let fixture: ComponentFixture<PrincingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrincingComponent]
    });
    fixture = TestBed.createComponent(PrincingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
