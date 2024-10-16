import { Routes } from '@angular/router';
export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then((h) => h.HomeComponent),
    children: [
      {
        path: 'recolectors',
        loadComponent: () => import('./components/recolectors/recolectors.component').then((r) => r.RecolectorsComponent),
      },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
