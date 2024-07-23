import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationSetupParticipantComponent } from './dashboard-organization-impact-verification-setup-participant.component';

describe('DashboardOrganizationImpactVerificationSetupParticipantComponent', () => {
  let component: DashboardOrganizationImpactVerificationSetupParticipantComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationSetupParticipantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationSetupParticipantComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationSetupParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
