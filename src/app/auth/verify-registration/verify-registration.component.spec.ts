import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyRegistrationComponent } from './verify-registration.component';

describe('VerifyRegistrationComponent', () => {
  let component: VerifyRegistrationComponent;
  let fixture: ComponentFixture<VerifyRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyRegistrationComponent]
    });
    fixture = TestBed.createComponent(VerifyRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
