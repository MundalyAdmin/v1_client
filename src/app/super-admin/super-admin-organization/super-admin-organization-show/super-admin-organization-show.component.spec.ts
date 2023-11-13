import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationShowComponent } from './super-admin-organization-show.component';

describe('SuperAdminOrganizationShowComponent', () => {
  let component: SuperAdminOrganizationShowComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationShowComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
