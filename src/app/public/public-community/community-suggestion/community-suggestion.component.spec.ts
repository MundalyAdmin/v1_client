import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitySuggestionComponent } from './community-suggestion.component';

describe('CommunitySuggestionComponent', () => {
  let component: CommunitySuggestionComponent;
  let fixture: ComponentFixture<CommunitySuggestionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommunitySuggestionComponent],
    });
    fixture = TestBed.createComponent(CommunitySuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
