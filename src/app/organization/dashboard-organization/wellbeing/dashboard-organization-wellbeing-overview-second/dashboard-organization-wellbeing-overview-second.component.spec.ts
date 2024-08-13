import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationWellbeingOverviewSecondComponent } from './dashboard-organization-wellbeing-overview-second.component';

describe('DashboardOrganizationWellbeingOverviewSecondComponent', () => {
  let component: DashboardOrganizationWellbeingOverviewSecondComponent;
  let fixture: ComponentFixture<DashboardOrganizationWellbeingOverviewSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationWellbeingOverviewSecondComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationWellbeingOverviewSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
