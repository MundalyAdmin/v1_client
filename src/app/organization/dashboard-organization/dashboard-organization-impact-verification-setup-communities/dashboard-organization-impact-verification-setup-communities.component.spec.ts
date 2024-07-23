import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationSetupCommunitiesComponent } from './dashboard-organization-impact-verification-setup-communities.component';

describe('DashboardOrganizationImpactVerificationSetupCommunitiesComponent', () => {
  let component: DashboardOrganizationImpactVerificationSetupCommunitiesComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationSetupCommunitiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationSetupCommunitiesComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationSetupCommunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
