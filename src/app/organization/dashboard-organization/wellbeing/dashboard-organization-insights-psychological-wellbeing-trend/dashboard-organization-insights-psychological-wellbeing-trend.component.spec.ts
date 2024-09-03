import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent } from './dashboard-organization-insights-psychological-wellbeing-trend.component';

describe('DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent', () => {
  let component: DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent,
      ],
    });
    fixture = TestBed.createComponent(
      DashboardOrganizationInsightsPsychologicalWellbeingTrendComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
