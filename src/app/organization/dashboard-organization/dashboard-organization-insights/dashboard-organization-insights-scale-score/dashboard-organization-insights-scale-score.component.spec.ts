import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsScaleScoreComponent } from './dashboard-organization-insights-scale-score.component';

describe('DashboardOrganizationInsightsScaleScoreComponent', () => {
  let component: DashboardOrganizationInsightsScaleScoreComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsScaleScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsScaleScoreComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsScaleScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
