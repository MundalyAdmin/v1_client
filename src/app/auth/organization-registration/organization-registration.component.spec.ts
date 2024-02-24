import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRegistrationComponent } from './organization-registration.component';

describe('OrganizationRegistrationComponent', () => {
  let component: OrganizationRegistrationComponent;
  let fixture: ComponentFixture<OrganizationRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationRegistrationComponent]
    });
    fixture = TestBed.createComponent(OrganizationRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
