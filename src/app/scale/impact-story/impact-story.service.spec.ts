import { TestBed } from '@angular/core/testing';

import { ImpactStoryService } from './impact-story.service';

describe('ImpactStoryService', () => {
  let service: ImpactStoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpactStoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
