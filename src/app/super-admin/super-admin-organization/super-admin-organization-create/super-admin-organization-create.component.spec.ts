import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationCreateComponent } from './super-admin-organization-create.component';

describe('SuperAdminOrganizationCreateComponent', () => {
  let component: SuperAdminOrganizationCreateComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationCreateComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
