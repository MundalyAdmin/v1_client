import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationWellbeingOverviewComponent } from './dashboard-organization-wellbeing-overview.component';

describe('DashboardOrganizationWellbeingOverviewComponent', () => {
  let component: DashboardOrganizationWellbeingOverviewComponent;
  let fixture: ComponentFixture<DashboardOrganizationWellbeingOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationWellbeingOverviewComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationWellbeingOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
