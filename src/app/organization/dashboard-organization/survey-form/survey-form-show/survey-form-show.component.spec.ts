import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFormShowComponent } from './survey-form-show.component';

describe('SurveyFormShowComponent', () => {
  let component: SurveyFormShowComponent;
  let fixture: ComponentFixture<SurveyFormShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyFormShowComponent]
    });
    fixture = TestBed.createComponent(SurveyFormShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
