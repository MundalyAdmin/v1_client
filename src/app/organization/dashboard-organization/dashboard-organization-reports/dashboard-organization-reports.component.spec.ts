import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationReportsComponent } from './dashboard-organization-reports.component';

describe('DashboardOrganizationReportsComponent', () => {
  let component: DashboardOrganizationReportsComponent;
  let fixture: ComponentFixture<DashboardOrganizationReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationReportsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
