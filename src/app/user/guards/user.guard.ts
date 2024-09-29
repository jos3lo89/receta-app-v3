import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStoreService } from 'src/app/shared/auth-state/auht-store.service';

export const userRoleGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authStore = inject(AuthStoreService);

  const role = authStore.getUserRoleSignal()();

  if (role() !== 'admin') {
    router.navigateByUrl('/pages/home');
    return false;
  }

  return true;
};
