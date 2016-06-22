import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent }     from './dashboard/dashboard.component';
import { MotorsByManufComponent } from './motors-by-manuf/motors-by-manuf.component';

export const routes: RouterConfig = [
  { path: '',     component: DashboardComponent  },
  { path: ':id',  component: MotorsByManufComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
