import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationCompleteRegistrationInfoComponent } from './dashboard-organization-complete-registration-info.component';

describe('DashboardOrganizationCompleteRegistrationInfoComponent', () => {
  let component: DashboardOrganizationCompleteRegistrationInfoComponent;
  let fixture: ComponentFixture<DashboardOrganizationCompleteRegistrationInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationCompleteRegistrationInfoComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationCompleteRegistrationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
