import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationSocialWellbeingComponent } from './dashboard-organization-social-wellbeing.component';

describe('DashboardOrganizationSocialWellbeingComponent', () => {
  let component: DashboardOrganizationSocialWellbeingComponent;
  let fixture: ComponentFixture<DashboardOrganizationSocialWellbeingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationSocialWellbeingComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationSocialWellbeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
