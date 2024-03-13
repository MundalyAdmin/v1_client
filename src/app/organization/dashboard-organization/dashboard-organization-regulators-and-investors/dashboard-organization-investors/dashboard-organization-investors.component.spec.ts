import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationInvestorsComponent } from './dashboard-organization-investors.component';

describe('DashboardOrganizationInvestorsComponent', () => {
  let component: DashboardOrganizationInvestorsComponent;
  let fixture: ComponentFixture<DashboardOrganizationInvestorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationInvestorsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationInvestorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
