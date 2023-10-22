import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySuggestionThanksComponent } from './community-suggestion-thanks.component';

describe('CommunitySuggestionThanksComponent', () => {
  let component: CommunitySuggestionThanksComponent;
  let fixture: ComponentFixture<CommunitySuggestionThanksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitySuggestionThanksComponent]
    });
    fixture = TestBed.createComponent(CommunitySuggestionThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
