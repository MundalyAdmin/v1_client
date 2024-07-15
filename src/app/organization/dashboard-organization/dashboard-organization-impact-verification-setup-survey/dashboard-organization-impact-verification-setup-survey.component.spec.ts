import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationSetupSurveyComponent } from './dashboard-organization-impact-verification-setup-survey.component';

describe('DashboardOrganizationImpactVerificationSetupSurveyComponent', () => {
  let component: DashboardOrganizationImpactVerificationSetupSurveyComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationSetupSurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationSetupSurveyComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationSetupSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
