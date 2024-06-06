import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationImpactInitiativeCreateComponent } from './super-admin-organization-impact-initiative-create.component';

describe('SuperAdminOrganizationImpactInitiativeCreateComponent', () => {
  let component: SuperAdminOrganizationImpactInitiativeCreateComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationImpactInitiativeCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationImpactInitiativeCreateComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationImpactInitiativeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
