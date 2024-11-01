import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDueDiligenceRequestComponent as DashboardOrganizationImpactVerificationRequestComponent } from './dashboard-organization-impact-verification-request.component';

describe('DashboardOrganizationDueDiligenceRequestComponent', () => {
  let component: DashboardOrganizationImpactVerificationRequestComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationRequestComponent],
    });
    fixture = TestBed.createComponent(
      DashboardOrganizationImpactVerificationRequestComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
