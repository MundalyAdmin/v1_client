import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsScalesScoreComponent } from './dashboard-organization-insights-scales-score.component';

describe('DashboardOrganizationInsightsScalesScoreComponent', () => {
  let component: DashboardOrganizationInsightsScalesScoreComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsScalesScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsScalesScoreComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsScalesScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
