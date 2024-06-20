import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsImpactFidelityTrendDataComponent } from './dashboard-organization-insights-impact-fidelity-trend-data.component';

describe('DashboardOrganizationInsightsImpactFidelityTrendDataComponent', () => {
  let component: DashboardOrganizationInsightsImpactFidelityTrendDataComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsImpactFidelityTrendDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsImpactFidelityTrendDataComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsImpactFidelityTrendDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
