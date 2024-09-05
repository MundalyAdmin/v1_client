import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDemographicsAgeRangeComponent } from './dashboard-organization-demographics-age-range.component';

describe('DashboardOrganizationDemographicsAgeRangeComponent', () => {
  let component: DashboardOrganizationDemographicsAgeRangeComponent;
  let fixture: ComponentFixture<DashboardOrganizationDemographicsAgeRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDemographicsAgeRangeComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDemographicsAgeRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
