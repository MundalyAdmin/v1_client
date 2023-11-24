import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationShowOverviewComponent } from './super-admin-organization-show-overview.component';

describe('SuperAdminOrganizationShowOverviewComponent', () => {
  let component: SuperAdminOrganizationShowOverviewComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationShowOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationShowOverviewComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationShowOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
