import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationRegistrationOrganizationInfoComponent } from './organization-registration-organization-info.component';

describe('OrganizationRegistrationOrganizationInfoComponent', () => {
  let component: OrganizationRegistrationOrganizationInfoComponent;
  let fixture: ComponentFixture<OrganizationRegistrationOrganizationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationRegistrationOrganizationInfoComponent]
    });
    fixture = TestBed.createComponent(OrganizationRegistrationOrganizationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
