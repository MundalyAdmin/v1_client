import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Helper } from '../../shared/helpers/helper/helper';

export const funderAuthorizationGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).typeOrganization?.id !== 1) {
    inject(Helper).notification.toastDanger(
      'You are not authorized to visit that page'
    );
    inject(Router).navigate(['/auth/login']);
    return false;
  }

  return true;
};
