import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOrganizationUploadReportsComponent } from './dashboard-organization-upload-reports.component';

describe('DashboardOrganizationUploadReportsComponent', () => {
  let component: DashboardOrganizationUploadReportsComponent;
  let fixture: ComponentFixture<DashboardOrganizationUploadReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardOrganizationUploadReportsComponent]
    });
    fixture = TestBed.createComponent(DashboardOrganizationUploadReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
