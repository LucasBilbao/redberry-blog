import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

export const authorizedGuard: () => CanActivateFn = () => () => {
  const isAuthorized = inject(LoginService).isAuthorized;
  const router = inject(Router);

  if (isAuthorized) {
    return true;
  }

  return router.createUrlTree(['blogs']);
};
