import { Routes } from '@angular/router';

export default [
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.page'),
  },
  {
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
