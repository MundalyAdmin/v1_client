import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationOverviewFilterComponent } from './dashboard-organization-overview-filter.component';

describe('DashboardOrganizationOverviewFilterComponent', () => {
  let component: DashboardOrganizationOverviewFilterComponent;
  let fixture: ComponentFixture<DashboardOrganizationOverviewFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationOverviewFilterComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationOverviewFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
