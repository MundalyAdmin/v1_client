import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationWaitlistComponent } from './super-admin-organization-waitlist.component';

describe('SuperAdminOrganizationWaitlistComponent', () => {
  let component: SuperAdminOrganizationWaitlistComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationWaitlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationWaitlistComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationWaitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
