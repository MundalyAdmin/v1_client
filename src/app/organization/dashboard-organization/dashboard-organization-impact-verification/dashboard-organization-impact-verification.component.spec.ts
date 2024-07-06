import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactVerificationComponent } from './dashboard-organization-impact-verification.component';

describe('DashboardOrganizationImpactVerificationComponent', () => {
  let component: DashboardOrganizationImpactVerificationComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactVerificationComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
