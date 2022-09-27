import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDataTableComponent } from './components/user-data-table/user-data-table.component';
const routes: Routes = [
  {
    path: '',
    component: UserDataTableComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
