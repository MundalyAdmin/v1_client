import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationOverviewPortfolioRiskComponent } from './dashboard-organization-overview-portfolio-risk.component';

describe('DashboardOrganizationOverviewPortfolioRiskComponent', () => {
  let component: DashboardOrganizationOverviewPortfolioRiskComponent;
  let fixture: ComponentFixture<DashboardOrganizationOverviewPortfolioRiskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationOverviewPortfolioRiskComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationOverviewPortfolioRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
