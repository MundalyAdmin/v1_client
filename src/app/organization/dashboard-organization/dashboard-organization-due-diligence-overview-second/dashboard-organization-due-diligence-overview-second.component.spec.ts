import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDueDiligenceOverviewSecondComponent } from './dashboard-organization-due-diligence-overview-second.component';

describe('DashboardOrganizationDueDiligenceOverviewSecondComponent', () => {
  let component: DashboardOrganizationDueDiligenceOverviewSecondComponent;
  let fixture: ComponentFixture<DashboardOrganizationDueDiligenceOverviewSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDueDiligenceOverviewSecondComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDueDiligenceOverviewSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
