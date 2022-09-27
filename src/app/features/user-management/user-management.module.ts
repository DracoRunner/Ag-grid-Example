import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management.routing.module';
import { UserDataTableComponent } from './components/user-data-table/user-data-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    AgGridModule,
    HttpClientModule,
  ],
  declarations: [UserDataTableComponent],
})
export class UserManagementModule {}
