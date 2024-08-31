import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationBaseScaleComponent } from './dashboard-organization-base-scale.component';

describe('DashboardOrganizationBaseScaleComponent', () => {
  let component: DashboardOrganizationBaseScaleComponent;
  let fixture: ComponentFixture<DashboardOrganizationBaseScaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationBaseScaleComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationBaseScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
