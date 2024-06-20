import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCompleteRegistrationComponent } from './dashboard-organization-complete-registration.component';

describe('DashboardOrganizationCompleteRegistrationComponent', () => {
  let component: DashboardOrganizationCompleteRegistrationComponent;
  let fixture: ComponentFixture<DashboardOrganizationCompleteRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCompleteRegistrationComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCompleteRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
