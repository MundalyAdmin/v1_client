import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationEditComponent } from './super-admin-organization-edit.component';

describe('SuperAdminOrganizationEditComponent', () => {
  let component: SuperAdminOrganizationEditComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationEditComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
