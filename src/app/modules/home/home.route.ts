import { Routes } from '@angular/router';
export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then((h) => h.HomeComponent),
    children: [
      { path: 'dashboard', loadComponent: () => import('./components/dashboard/dashboard.component').then((d) => d.DashboardComponent) },
      {
        path: 'recolectors',
        loadComponent: () => import('./components/recolectors/recolectors.component').then((r) => r.RecolectorsComponent),
      },
      {
        path: 'coffeeTotal',
        loadComponent: () => import('./components/caffe-total/caffe-total.component').then((ct) => ct.CaffeTotalComponent),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
