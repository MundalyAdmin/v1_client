import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationPartnerInvitationListComponent } from './organization-partner-invitation-list.component';

describe('OrganizationPartnerInvitationListComponent', () => {
  let component: OrganizationPartnerInvitationListComponent;
  let fixture: ComponentFixture<OrganizationPartnerInvitationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationPartnerInvitationListComponent]
    });
    fixture = TestBed.createComponent(OrganizationPartnerInvitationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
