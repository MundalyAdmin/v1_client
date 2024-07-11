import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationSetupBaseComponent } from './dashboard-organization-impact-verification-setup-base.component';

describe('DashboardOrganizationImpactVerificationSetupBaseComponent', () => {
  let component: DashboardOrganizationImpactVerificationSetupBaseComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationSetupBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationSetupBaseComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationSetupBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
