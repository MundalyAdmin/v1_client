import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { funderAuthorizationGuard } from './funder-authorization.guard';

describe('funderAuthorizationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => funderAuthorizationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
