import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationWellbeingInsightsComponent } from './dashboard-organization-wellbeing-insights.component';

describe('DashboardOrganizationWellbeingInsightsComponent', () => {
  let component: DashboardOrganizationWellbeingInsightsComponent;
  let fixture: ComponentFixture<DashboardOrganizationWellbeingInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationWellbeingInsightsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationWellbeingInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
