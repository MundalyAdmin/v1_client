import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsPsychologicalHealthTrendComponent } from './dashboard-organization-insights-psychological-health-trend.component';

describe('DashboardOrganizationInsightsPsychologicalHealthTrendComponent', () => {
  let component: DashboardOrganizationInsightsPsychologicalHealthTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsPsychologicalHealthTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsPsychologicalHealthTrendComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsPsychologicalHealthTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
