import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/home/home.route').then((m) => m.homeRoutes) },
  { path: 'login', loadComponent: () => import('./modules/login/login.component').then((l) => l.LoginComponent) },
  { path: '**', redirectTo: '' },
];
