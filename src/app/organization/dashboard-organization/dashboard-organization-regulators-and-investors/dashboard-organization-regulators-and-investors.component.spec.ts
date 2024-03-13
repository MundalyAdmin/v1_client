import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationRegulatorsAndInvestorsComponent } from './dashboard-organization-regulators-and-investors.component';

describe('DashboardOrganizationRegulatorsAndInvestorsComponent', () => {
  let component: DashboardOrganizationRegulatorsAndInvestorsComponent;
  let fixture: ComponentFixture<DashboardOrganizationRegulatorsAndInvestorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationRegulatorsAndInvestorsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationRegulatorsAndInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
