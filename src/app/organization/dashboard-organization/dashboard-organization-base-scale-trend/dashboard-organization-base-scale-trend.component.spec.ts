import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationBaseScaleTrendComponent } from './dashboard-organization-base-scale-trend.component';

describe('DashboardOrganizationBaseScaleTrendComponent', () => {
  let component: DashboardOrganizationBaseScaleTrendComponent;
  let fixture: ComponentFixture<DashboardOrganizationBaseScaleTrendComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationBaseScaleTrendComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationBaseScaleTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
