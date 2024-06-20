import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsNetPromoterScoreComponent } from './dashboard-organization-insights-net-promoter-score.component';

describe('DashboardOrganizationInsightsNetPromoterScoreComponent', () => {
  let component: DashboardOrganizationInsightsNetPromoterScoreComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsNetPromoterScoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsNetPromoterScoreComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsNetPromoterScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
