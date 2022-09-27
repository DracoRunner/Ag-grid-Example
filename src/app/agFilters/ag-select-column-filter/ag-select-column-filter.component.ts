import { Component } from '@angular/core';
import { AgFloatingFilterComponent } from 'ag-grid-angular';
import { IFloatingFilterParams } from 'ag-grid-community';

@Component({
  selector: 'app-ag-select-column-filter',
  templateUrl: './ag-select-column-filter.component.html',
  styleUrls: ['./ag-select-column-filter.component.css'],
})
export class AgSelectColumnFilterComponent
  implements AgFloatingFilterComponent
{
  params: IFloatingFilterParams | undefined;
  currentValue: Number | null | string = null;
  style: any;
  options: any;

  agInit(params: any): void {
    this.params = params;
    this.options = params.options;
  }

  onParentModelChanged(parentModel: any) {
    if (!parentModel) {
      this.currentValue = null;
    } else {
      this.currentValue = parentModel.filter;
    }
  }

  onChange() {
    if (!!!this.currentValue) {
      this.params?.parentFilterInstance((instance: any) => {
        instance.onFloatingFilterChanged(null, null);
      });
      return;
    }
    this.params?.parentFilterInstance((instance: any) => {
      instance.onFloatingFilterChanged('equals', this.currentValue);
    });
  }
}
