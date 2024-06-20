import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminOrganizationReportListComponent } from './super-admin-organization-report-list.component';

describe('SuperAdminOrganizationReportListComponent', () => {
  let component: SuperAdminOrganizationReportListComponent;
  let fixture: ComponentFixture<SuperAdminOrganizationReportListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperAdminOrganizationReportListComponent]
    });
    fixture = TestBed.createComponent(SuperAdminOrganizationReportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
