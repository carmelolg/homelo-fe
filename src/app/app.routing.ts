import { SensorModule } from './sensor/sensor.module';
import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'sensor',
        loadChildren: () => import('./sensor/sensor.module').then(m => m.SensorModule)
      }
    ]
  }
];
