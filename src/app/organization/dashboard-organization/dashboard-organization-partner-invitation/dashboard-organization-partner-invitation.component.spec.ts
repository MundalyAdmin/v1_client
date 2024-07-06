import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationPartnerInvitationComponent } from './dashboard-organization-partner-invitation.component';

describe('DashboardOrganizationPartnerInvitationComponent', () => {
  let component: DashboardOrganizationPartnerInvitationComponent;
  let fixture: ComponentFixture<DashboardOrganizationPartnerInvitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationPartnerInvitationComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationPartnerInvitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
