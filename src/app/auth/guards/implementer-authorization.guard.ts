import { inject } from '@angular/core';
import { ActivatedRoute, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Helper } from '../../shared/helpers/helper/helper';

export const implementerAuthorizationGuard: CanActivateFn = (route, state) => {
  if (inject(AuthService).typeOrganization.id !== 2) {
    inject(Helper).notification.toastDanger(
      'You are not authorized to visit that page'
    );
    inject(Router).navigate(['/auth/login']);
    return false;
  }

  return true;
};
