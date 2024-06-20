import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactInitiativeDetailsComponent } from './dashboard-organization-impact-initiative-details.component';

describe('DashboardOrganizationImpactInitiativeDetailsComponent', () => {
  let component: DashboardOrganizationImpactInitiativeDetailsComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactInitiativeDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactInitiativeDetailsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactInitiativeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
