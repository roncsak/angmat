import { provideRouter, RouterConfig } from '@angular/router';
import { DashboardComponent } from './dashboard/index';
import { MotorsByManufComponent } from './motors-by-manuf/motors-by-manuf.component';

const routes: RouterConfig = [
  { path: '/',  component: DashboardComponent, index: true },
  { path: '/:id',  component: MotorsByManufComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

// import {AngmatAppComponent} from './angmat.component';
// import {MotorsByManufComponent} from './motors-by-manuf/motors-by-manuf.component';
//
// export const AngmatAppRoutes = [
//   { index: true, component: AngmatAppComponent},
//   { path: '/:id', component: MotorsByManufComponent}
// ]
