import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { implementerAuthorizationGuard } from './implementer-authorization.guard';

describe('implementerAuthorizationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => implementerAuthorizationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
