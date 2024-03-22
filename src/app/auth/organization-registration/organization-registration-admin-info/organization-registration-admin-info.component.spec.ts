import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRegistrationAdminInfoComponent } from './organization-registration-admin-info.component';

describe('OrganizationRegistrationAdminInfoComponent', () => {
  let component: OrganizationRegistrationAdminInfoComponent;
  let fixture: ComponentFixture<OrganizationRegistrationAdminInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationRegistrationAdminInfoComponent]
    });
    fixture = TestBed.createComponent(OrganizationRegistrationAdminInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
