import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCompleteRegistrationPasswordComponent } from './dashboard-organization-complete-registration-password.component';

describe('DashboardOrganizationCompleteRegistrationPasswordComponent', () => {
  let component: DashboardOrganizationCompleteRegistrationPasswordComponent;
  let fixture: ComponentFixture<DashboardOrganizationCompleteRegistrationPasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCompleteRegistrationPasswordComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCompleteRegistrationPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
