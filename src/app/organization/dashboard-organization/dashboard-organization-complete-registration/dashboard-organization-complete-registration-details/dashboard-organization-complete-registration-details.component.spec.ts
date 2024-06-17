import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCompleteRegistrationDetailsComponent } from './dashboard-organization-complete-registration-details.component';

describe('DashboardOrganizationCompleteRegistrationDetailsComponent', () => {
  let component: DashboardOrganizationCompleteRegistrationDetailsComponent;
  let fixture: ComponentFixture<DashboardOrganizationCompleteRegistrationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCompleteRegistrationDetailsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCompleteRegistrationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
