import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationVerifyComponent } from './dashboard-organization-verify.component';

describe('DashboardOrganizationVerifyComponent', () => {
  let component: DashboardOrganizationVerifyComponent;
  let fixture: ComponentFixture<DashboardOrganizationVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationVerifyComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
