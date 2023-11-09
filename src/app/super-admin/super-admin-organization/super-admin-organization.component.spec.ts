import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationComponent } from './super-admin-organization.component';

describe('SuperAdminOrganizationComponent', () => {
  let component: SuperAdminOrganizationComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
