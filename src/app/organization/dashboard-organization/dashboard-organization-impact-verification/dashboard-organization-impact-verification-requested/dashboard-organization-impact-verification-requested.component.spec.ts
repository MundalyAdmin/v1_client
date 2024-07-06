import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationRequestedComponent } from './dashboard-organization-impact-verification-requested.component';

describe('DashboardOrganizationImpactVerificationRequestedComponent', () => {
  let component: DashboardOrganizationImpactVerificationRequestedComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationRequestedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationRequestedComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationRequestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
