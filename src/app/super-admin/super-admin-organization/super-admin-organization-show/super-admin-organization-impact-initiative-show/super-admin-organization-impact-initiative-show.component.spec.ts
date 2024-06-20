import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationImpactInitiativeShowComponent } from './super-admin-organization-impact-initiative-show.component';

describe('SuperAdminOrganizationImpactInitiativeShowComponent', () => {
  let component: SuperAdminOrganizationImpactInitiativeShowComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationImpactInitiativeShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationImpactInitiativeShowComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationImpactInitiativeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
