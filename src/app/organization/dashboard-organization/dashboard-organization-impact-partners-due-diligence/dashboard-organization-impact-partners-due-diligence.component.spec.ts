import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactPartnersDueDiligenceComponent } from './dashboard-organization-impact-partners-due-diligence.component';

describe('DashboardOrganizationImpactPartnersDueDiligenceComponent', () => {
  let component: DashboardOrganizationImpactPartnersDueDiligenceComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactPartnersDueDiligenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactPartnersDueDiligenceComponent],
    });
    fixture = TestBed.createComponent(
      DashboardOrganizationImpactPartnersDueDiligenceComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
