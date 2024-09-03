import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDemographicsGenderComponent } from './dashboard-organization-demographics-gender.component';

describe('DashboardOrganizationDemographicsGenderComponent', () => {
  let component: DashboardOrganizationDemographicsGenderComponent;
  let fixture: ComponentFixture<DashboardOrganizationDemographicsGenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDemographicsGenderComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDemographicsGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
