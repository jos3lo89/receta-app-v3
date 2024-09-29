import { Routes } from '@angular/router';

export default [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page'),
  },
  {
    path: 'regiones',
    loadChildren: () => import('../recetas/recetas.routes'),
  },
] as Routes;
