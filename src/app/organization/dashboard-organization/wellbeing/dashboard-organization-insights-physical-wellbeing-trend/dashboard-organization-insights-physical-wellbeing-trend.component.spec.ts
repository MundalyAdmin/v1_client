import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsPhysicalWellbeingTrendComponent } from './dashboard-organization-insights-physical-health-trend.component';

describe('DashboardOrganizationInsightsPhysicalHealthTrendComponent', () => {
  let component: DashboardOrganizationInsightsPhysicalWellbeingTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsPhysicalWellbeingTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardOrganizationInsightsPhysicalWellbeingTrendComponent,
      ],
    });
    fixture = TestBed.createComponent(
      DashboardOrganizationInsightsPhysicalWellbeingTrendComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
