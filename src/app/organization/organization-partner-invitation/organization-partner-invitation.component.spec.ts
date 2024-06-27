import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationPartnerInvitationComponent } from './organization-partner-invitation.component';

describe('OrganizationPartnerInvitationComponent', () => {
  let component: OrganizationPartnerInvitationComponent;
  let fixture: ComponentFixture<OrganizationPartnerInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationPartnerInvitationComponent]
    });
    fixture = TestBed.createComponent(OrganizationPartnerInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
