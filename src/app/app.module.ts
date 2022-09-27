import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AgSelectColumnFilterComponent } from './agFilters/ag-select-column-filter/ag-select-column-filter.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AgGridModule, HttpClientModule],
  declarations: [AppComponent, AgSelectColumnFilterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
