import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'admin/products/management', component: AdminComponent},
];

export const AdminRoutingModule = RouterModule.forChild(routes);
