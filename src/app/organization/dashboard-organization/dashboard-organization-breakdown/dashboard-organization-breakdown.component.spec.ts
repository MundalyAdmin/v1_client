import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationBreakdownComponent } from './dashboard-organization-breakdown.component';

describe('DashboardOrganizationBreakdownComponent', () => {
  let component: DashboardOrganizationBreakdownComponent;
  let fixture: ComponentFixture<DashboardOrganizationBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationBreakdownComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
