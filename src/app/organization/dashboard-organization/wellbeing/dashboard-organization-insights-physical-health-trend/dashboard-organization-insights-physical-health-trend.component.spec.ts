import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsPhysicalHealthTrendComponent } from './dashboard-organization-insights-physical-health-trend.component';

describe('DashboardOrganizationInsightsPhysicalHealthTrendComponent', () => {
  let component: DashboardOrganizationInsightsPhysicalHealthTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsPhysicalHealthTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsPhysicalHealthTrendComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsPhysicalHealthTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
