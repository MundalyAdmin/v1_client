import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationSetupComponent } from './dashboard-organization-impact-verification-setup.component';

describe('DashboardOrganizationImpactVerificationSetupComponent', () => {
  let component: DashboardOrganizationImpactVerificationSetupComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationSetupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationSetupComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
