import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleCompanyReportedComponent } from './organization-new-style-company-reported.component';

describe('OrganizationNewStyleCompanyReportedComponent', () => {
  let component: OrganizationNewStyleCompanyReportedComponent;
  let fixture: ComponentFixture<OrganizationNewStyleCompanyReportedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleCompanyReportedComponent]
    });
    fixture = TestBed.createComponent(OrganizationNewStyleCompanyReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
