import { TestBed } from '@angular/core/testing';

import { CommunitySuggestionComponent } from './community-suggestion.component';

describe('CommunitySuggestionComponent', () => {
  let service: CommunitySuggestionComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunitySuggestionComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
