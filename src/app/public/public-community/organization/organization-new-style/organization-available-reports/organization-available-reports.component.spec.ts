import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAvailableReportsComponent } from './organization-available-reports.component';

describe('OrganizationAvailableReportsComponent', () => {
  let component: OrganizationAvailableReportsComponent;
  let fixture: ComponentFixture<OrganizationAvailableReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationAvailableReportsComponent]
    });
    fixture = TestBed.createComponent(OrganizationAvailableReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
