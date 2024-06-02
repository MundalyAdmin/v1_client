import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsImpactFidelityTrendComponent } from './dashboard-organization-insights-impact-fidelity-trend.component';

describe('DashboardOrganizationInsightsImpactFidelityTrendComponent', () => {
  let component: DashboardOrganizationInsightsImpactFidelityTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsImpactFidelityTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsImpactFidelityTrendComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsImpactFidelityTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
