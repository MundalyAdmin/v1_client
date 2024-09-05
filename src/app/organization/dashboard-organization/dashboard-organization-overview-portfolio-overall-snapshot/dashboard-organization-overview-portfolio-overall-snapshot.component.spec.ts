import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationOverviewPortfolioOverallSnapshotComponent } from './dashboard-organization-overview-portfolio-overall-snapshot.component';

describe('DashboardOrganizationOverviewPortfolioOverallSnapshotComponent', () => {
  let component: DashboardOrganizationOverviewPortfolioOverallSnapshotComponent;
  let fixture: ComponentFixture<DashboardOrganizationOverviewPortfolioOverallSnapshotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationOverviewPortfolioOverallSnapshotComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationOverviewPortfolioOverallSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
