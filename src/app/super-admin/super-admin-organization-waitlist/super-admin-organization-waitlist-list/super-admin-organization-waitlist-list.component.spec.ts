import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationWaitlistListComponent } from './super-admin-organization-waitlist-list.component';

describe('SuperAdminOrganizationWaitlistListComponent', () => {
  let component: SuperAdminOrganizationWaitlistListComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationWaitlistListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationWaitlistListComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationWaitlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
