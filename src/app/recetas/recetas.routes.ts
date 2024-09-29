import { Routes } from '@angular/router';

export default [
  {
    path: 'cat',
    loadComponent: () => import('./pages/regiones/regiones.page'),
  },
] as Routes;
