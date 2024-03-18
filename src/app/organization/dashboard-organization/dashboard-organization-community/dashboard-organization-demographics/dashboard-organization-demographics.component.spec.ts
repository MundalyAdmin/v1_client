import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDemographicsComponent } from './dashboard-organization-demographics.component';

describe('DashboardOrganizationDemographicsComponent', () => {
  let component: DashboardOrganizationDemographicsComponent;
  let fixture: ComponentFixture<DashboardOrganizationDemographicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDemographicsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDemographicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
