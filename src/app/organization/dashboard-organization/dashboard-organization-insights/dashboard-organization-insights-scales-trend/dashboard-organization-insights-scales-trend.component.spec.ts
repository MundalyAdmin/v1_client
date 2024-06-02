import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightsScalesTrendComponent } from './dashboard-organization-insights-scales-trend.component';

describe('DashboardOrganizationInsightsScalesTrendComponent', () => {
  let component: DashboardOrganizationInsightsScalesTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightsScalesTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightsScalesTrendComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightsScalesTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
