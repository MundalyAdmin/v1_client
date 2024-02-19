import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleCommunityVerifiedComponent } from './organization-new-style-community-verified.component';

describe('OrganizationNewStyleCommunityVerifiedComponent', () => {
  let component: OrganizationNewStyleCommunityVerifiedComponent;
  let fixture: ComponentFixture<OrganizationNewStyleCommunityVerifiedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleCommunityVerifiedComponent]
    });
    fixture = TestBed.createComponent(OrganizationNewStyleCommunityVerifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
