// import { inject } from '@angular/core';
// import { CanActivateFn, Router } from '@angular/router';
// import { map } from 'rxjs';
// import { AuthStateService } from 'src/app/shared/auth-state/auth-state.service';

// export const userRoleGuard = (): CanActivateFn => {
//   return () => {
//     const router = inject(Router);
//     const authState = inject(AuthStateService);

//     return authState.authState$.pipe(
//       map((state) => {

//         if (!state) {
//           router.navigateByUrl('/auth/login');
//           return false;
//         }

//         return true;
//       })
//     );
//   };
// };
