import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCommunityComponent } from './dashboard-organization-community.component';

describe('DashboardOrganizationCommunityComponent', () => {
  let component: DashboardOrganizationCommunityComponent;
  let fixture: ComponentFixture<DashboardOrganizationCommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCommunityComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
