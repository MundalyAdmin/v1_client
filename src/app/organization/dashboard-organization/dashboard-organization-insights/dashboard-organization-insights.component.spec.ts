import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsComponent } from './dashboard-organization-insights.component';

describe('DashboardOrganizationInsightsComponent', () => {
  let component: DashboardOrganizationInsightsComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
