import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationOverviewComponent } from './dashboard-organization-overview.component';

describe('DashboardOrganizationOverviewComponent', () => {
  let component: DashboardOrganizationOverviewComponent;
  let fixture: ComponentFixture<DashboardOrganizationOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationOverviewComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
