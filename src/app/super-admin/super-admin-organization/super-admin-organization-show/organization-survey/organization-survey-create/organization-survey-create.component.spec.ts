import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSurveyCreateComponent } from './organization-survey-create.component';

describe('OrganizationSurveyCreateComponent', () => {
  let component: OrganizationSurveyCreateComponent;
  let fixture: ComponentFixture<OrganizationSurveyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSurveyCreateComponent]
    });
    fixture = TestBed.createComponent(OrganizationSurveyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
