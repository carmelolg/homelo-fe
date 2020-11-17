import { AuthGuard } from './../auth.guard.service';
import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const DashboardRoutes: Routes = [{
  path: '',
  component: DashboardComponent,
  canActivate: [AuthGuard]
}];
