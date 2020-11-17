import { AuthGuard } from './../auth.guard.service';
import { Routes } from '@angular/router';
import SensorComponent from './sensor.component';

export const SensorRoutes: Routes = [{
  path: '',
  component: SensorComponent,
  canActivate: [AuthGuard]
}];
