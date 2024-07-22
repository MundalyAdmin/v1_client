import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationUnavailableInsightsComponent } from './dashboard-organization-unavailable-insights.component';

describe('DashboardOrganizationUnavailableInsightsComponent', () => {
  let component: DashboardOrganizationUnavailableInsightsComponent;
  let fixture: ComponentFixture<DashboardOrganizationUnavailableInsightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationUnavailableInsightsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationUnavailableInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
