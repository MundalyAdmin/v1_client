import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationImpactInitiativeComponent } from './dashboard-organization-impact-initiative.component';

describe('DashboardOrganizationImpactInitiativeComponent', () => {
  let component: DashboardOrganizationImpactInitiativeComponent;
  let fixture: ComponentFixture<DashboardOrganizationImpactInitiativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationImpactInitiativeComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationImpactInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
