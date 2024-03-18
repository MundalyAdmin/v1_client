import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationForecastComponent } from './dashboard-organization-forecast.component';

describe('DashboardOrganizationForecastComponent', () => {
  let component: DashboardOrganizationForecastComponent;
  let fixture: ComponentFixture<DashboardOrganizationForecastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationForecastComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
