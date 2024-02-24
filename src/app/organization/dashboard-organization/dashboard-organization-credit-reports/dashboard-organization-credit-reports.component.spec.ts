import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCreditReportsComponent } from './dashboard-organization-credit-reports.component';

describe('DashboardOrganizationCreditReportsComponent', () => {
  let component: DashboardOrganizationCreditReportsComponent;
  let fixture: ComponentFixture<DashboardOrganizationCreditReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCreditReportsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCreditReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
