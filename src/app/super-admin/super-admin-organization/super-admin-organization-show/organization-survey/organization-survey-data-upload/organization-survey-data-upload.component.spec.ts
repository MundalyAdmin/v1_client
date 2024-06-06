import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSurveyDataUploadComponent } from './organization-survey-data-upload.component';

describe('OrganizationSurveyDataUploadComponent', () => {
  let component: OrganizationSurveyDataUploadComponent;
  let fixture: ComponentFixture<OrganizationSurveyDataUploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSurveyDataUploadComponent]
    });
    fixture = TestBed.createComponent(OrganizationSurveyDataUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
