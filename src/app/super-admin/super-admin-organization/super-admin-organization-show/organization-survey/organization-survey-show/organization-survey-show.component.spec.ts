import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSurveyShowComponent } from './organization-survey-show.component';

describe('OrganizationSurveyShowComponent', () => {
  let component: OrganizationSurveyShowComponent;
  let fixture: ComponentFixture<OrganizationSurveyShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSurveyShowComponent]
    });
    fixture = TestBed.createComponent(OrganizationSurveyShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
