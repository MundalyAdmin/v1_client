import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDemographicsEhtnicityComponent } from './dashboard-organization-demographics-ehtnicity.component';

describe('DashboardOrganizationDemographicsEhtnicityComponent', () => {
  let component: DashboardOrganizationDemographicsEhtnicityComponent;
  let fixture: ComponentFixture<DashboardOrganizationDemographicsEhtnicityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDemographicsEhtnicityComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDemographicsEhtnicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
