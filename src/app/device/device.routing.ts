import { Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard.service';
import { DeviceComponent } from './device.component';


export const DeviceRoutes: Routes = [{
  path: '',
  component: DeviceComponent,
  canActivate: [AuthGuard]
}];
