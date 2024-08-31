import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationWellbeingSummaryComponent } from './dashboard-organization-wellbeing-summary.component';

describe('DashboardOrganizationWellbeingSummaryComponent', () => {
  let component: DashboardOrganizationWellbeingSummaryComponent;
  let fixture: ComponentFixture<DashboardOrganizationWellbeingSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationWellbeingSummaryComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationWellbeingSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
