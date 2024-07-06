import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationReceivedComponent } from './dashboard-organization-impact-verification-received.component';

describe('DashboardOrganizationImpactVerificationReceivedComponent', () => {
  let component: DashboardOrganizationImpactVerificationReceivedComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationReceivedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationReceivedComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
