import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationImpactInitiativeComponent } from './super-admin-organization-impact-initiative.component';

describe('SuperAdminOrganizationImpactInitiativeComponent', () => {
  let component: SuperAdminOrganizationImpactInitiativeComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationImpactInitiativeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationImpactInitiativeComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationImpactInitiativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
