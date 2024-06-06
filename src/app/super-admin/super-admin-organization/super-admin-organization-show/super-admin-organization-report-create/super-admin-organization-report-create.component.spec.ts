import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationReportCreateComponent } from './super-admin-organization-report-create.component';

describe('SuperAdminOrganizationReportCreateComponent', () => {
  let component: SuperAdminOrganizationReportCreateComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationReportCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationReportCreateComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationReportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
