import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationSetupLaunchComponent } from './dashboard-organization-impact-verification-setup-launch.component';

describe('DashboardOrganizationImpactVerificationSetupLaunchComponent', () => {
  let component: DashboardOrganizationImpactVerificationSetupLaunchComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationSetupLaunchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationSetupLaunchComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationSetupLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
