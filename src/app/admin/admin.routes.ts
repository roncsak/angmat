import { AuthGuard }          from '../auth.guard';
import { AuthService }        from '../auth.service';
import { AdminComponent }     from './admin.component';

import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { ManageMotorComponent } from '../manage-motor/manage-motor.component';

export const AdminRoutes = [
  {
    path: 'admin', component: AdminComponent, canActivate: [AuthGuard], index: true
    , children: [
      { path: '', component: AdminDashboardComponent }
      , { path: 'edit/:id/:id', component: ManageMotorComponent }
    ]
  }
];
