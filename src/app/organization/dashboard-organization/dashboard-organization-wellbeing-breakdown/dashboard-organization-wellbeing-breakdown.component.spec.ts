import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationWellbeingBreakdownComponent } from './dashboard-organization-wellbeing-breakdown.component';

describe('DashboardOrganizationWellbeingBreakdownComponent', () => {
  let component: DashboardOrganizationWellbeingBreakdownComponent;
  let fixture: ComponentFixture<DashboardOrganizationWellbeingBreakdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationWellbeingBreakdownComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationWellbeingBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
