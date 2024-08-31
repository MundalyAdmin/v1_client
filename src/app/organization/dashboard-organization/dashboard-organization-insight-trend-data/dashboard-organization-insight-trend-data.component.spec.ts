import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInsightTrendDataComponent } from './dashboard-organization-insight-trend-data.component';

describe('DashboardOrganizationInsightTrendDataComponent', () => {
  let component: DashboardOrganizationInsightTrendDataComponent;
  let fixture: ComponentFixture<DashboardOrganizationInsightTrendDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInsightTrendDataComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInsightTrendDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
