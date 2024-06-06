import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationReportComponent } from './super-admin-organization-report.component';

describe('SuperAdminOrganizationReportComponent', () => {
  let component: SuperAdminOrganizationReportComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationReportComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
