import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsWellbeingTrendComponent } from './dashboard-organization-insights-wellbeing-trend.component';

describe('DashboardOrganizationInsightsWellbeingTrendComponent', () => {
  let component: DashboardOrganizationInsightsWellbeingTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsWellbeingTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsWellbeingTrendComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsWellbeingTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
