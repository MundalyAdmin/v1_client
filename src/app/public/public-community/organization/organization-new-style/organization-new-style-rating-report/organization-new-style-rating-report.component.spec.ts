import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationNewStyleRatingReportComponent } from './organization-new-style-rating-report.component';

describe('OrganizationNewStyleRatingReportComponent', () => {
  let component: OrganizationNewStyleRatingReportComponent;
  let fixture: ComponentFixture<OrganizationNewStyleRatingReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationNewStyleRatingReportComponent]
    });
    fixture = TestBed.createComponent(OrganizationNewStyleRatingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
