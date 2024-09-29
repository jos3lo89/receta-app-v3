import { Routes } from '@angular/router';
import { userRoleGuard } from './guards/user.guard';

export default [
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page'),
  },
  {
    canActivateChild: [userRoleGuard],
    path: 'receta/add-receta',
    loadComponent: () =>
      import('../recetas/pages/agegar-receta/agegar-receta.page'),
  },
  {
    path: 'favorities',
    loadComponent: () =>
      import('./pages/recetas-favoritas/recetas-favoritas.page'),
  },
] as Routes;
