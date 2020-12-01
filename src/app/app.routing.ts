import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard.service';

export const AppRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
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
      },
      {
        path: 'device',
        loadChildren: () => import('./device/device.module').then(m => m.DeviceModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  }
];
