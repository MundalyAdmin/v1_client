import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationListComponent } from './super-admin-organization-list.component';

describe('SuperAdminOrganizationListComponent', () => {
  let component: SuperAdminOrganizationListComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationListComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
