import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSurveyComponent } from './organization-survey.component';

describe('OrganizationSurveyComponent', () => {
  let component: OrganizationSurveyComponent;
  let fixture: ComponentFixture<OrganizationSurveyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSurveyComponent]
    });
    fixture = TestBed.createComponent(OrganizationSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
