import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsCommunityReputationTrendComponent } from './dashboard-organization-insights-community-reputation-trend.component';

describe('DashboardOrganizationInsightsCommunityReputationTrendComponent', () => {
  let component: DashboardOrganizationInsightsCommunityReputationTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsCommunityReputationTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsCommunityReputationTrendComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsCommunityReputationTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
