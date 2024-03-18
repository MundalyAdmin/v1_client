import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationSocialIssuesComponent } from './dashboard-organization-social-issues.component';

describe('DashboardOrganizationSocialIssuesComponent', () => {
  let component: DashboardOrganizationSocialIssuesComponent;
  let fixture: ComponentFixture<DashboardOrganizationSocialIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationSocialIssuesComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationSocialIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
