import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationImpactInitiativeListComponent } from './super-admin-organization-impact-initiative-list.component';

describe('SuperAdminOrganizationImpactInitiativeListComponent', () => {
  let component: SuperAdminOrganizationImpactInitiativeListComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationImpactInitiativeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationImpactInitiativeListComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationImpactInitiativeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
