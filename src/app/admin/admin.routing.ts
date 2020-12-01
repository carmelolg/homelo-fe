import { Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard.service';
import { AdminComponent } from './admin.component';


export const AdminRoutes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivate: [AuthGuard]
}];
