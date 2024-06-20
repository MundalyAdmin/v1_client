import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const verifiedUserGuard: CanActivateFn = (route, state) => {
  const user = inject(AuthService).getUser();
  const router = inject(Router);

  if (!user) {
    router.navigate(['/auth/login']);
    return false;
  }

  if (!user.verified) {
    router.navigate(['/auth/account-verification']);
    return false;
  }

  return true;
};
