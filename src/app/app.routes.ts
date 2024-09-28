import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/home',
    pathMatch: 'full',
  },
  {
    path: 'pages',
    loadComponent: () => import('./layout/layout.component'),
    loadChildren: () => import('./pages/pages.routes'),
  },
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadComponent: () => import('./layout/authLayout.component'),
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: 'user',
    loadComponent: () => import('./layout/userLayout.component'),
    loadChildren: () => import('./user/user.routes'),
  },
  {
    path: '**',
    redirectTo: 'pages/home',
  },
];
