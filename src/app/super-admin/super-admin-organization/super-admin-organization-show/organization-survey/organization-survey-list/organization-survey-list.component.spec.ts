import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationSurveyListComponent } from './organization-survey-list.component';

describe('OrganizationSurveyListComponent', () => {
  let component: OrganizationSurveyListComponent;
  let fixture: ComponentFixture<OrganizationSurveyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrganizationSurveyListComponent]
    });
    fixture = TestBed.createComponent(OrganizationSurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
