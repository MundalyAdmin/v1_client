import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationDemographicsRelationshipStatusComponent } from './dashboard-organization-demographics-relationship-status.component';

describe('DashboardOrganizationDemographicsRelationshipStatusComponent', () => {
  let component: DashboardOrganizationDemographicsRelationshipStatusComponent;
  let fixture: ComponentFixture<DashboardOrganizationDemographicsRelationshipStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationDemographicsRelationshipStatusComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationDemographicsRelationshipStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
