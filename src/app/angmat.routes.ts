import { provideRouter, RouterConfig } from '@angular/router';

import { AuthGuard }  from './auth.guard';

import { AdminComponent }         from './admin/admin.component';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { MotorsByManufComponent } from './motors-by-manuf/motors-by-manuf.component';
import { AdminRoutes }            from './admin/admin.routes';
import { LoginRoutes,
         AUTH_PROVIDERS }         from './login/login.routes';

export const routes: RouterConfig = [
  ...LoginRoutes,
  { path: '',       component: DashboardComponent },
  ...AdminRoutes,
  // { path: 'admin',  component: AdminComponent, canActivate: [AuthGuard] },
  { path: ':id',    component: MotorsByManufComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS
];
