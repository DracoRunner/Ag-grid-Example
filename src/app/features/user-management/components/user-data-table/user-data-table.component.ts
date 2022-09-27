import { Component, OnInit } from '@angular/core';
import {
  DragStoppedEvent,
  GridApi,
  GridOptions,
  IGetRowsParams,
} from 'ag-grid-community';
import { UserDataService } from '../../services/user-data.service';
import { gridColumn } from '../../statics';
@Component({
  selector: 'app-user-data-table',
  templateUrl: './user-data-table.component.html',
  styleUrls: ['./user-data-table.component.css'],
})
export class UserDataTableComponent implements OnInit {
  gridOptions: GridOptions;
  griApi: GridApi;

  constructor(private service: UserDataService) {}

  ngOnInit(): void {
    this.gridOptions = {
      rowModelType: 'infinite',
      columnDefs: gridColumn,
      defaultColDef: {
        resizable: true,
        sortable: true,
        floatingFilter: true,
        floatingFilterComponentParams: {
          suppressFilterButton: true,
        },
        suppressMenu: true,
      },
      rowData: [],
      onGridReady: this.onGridReady,
      cacheBlockSize: 30,
      maxConcurrentDatasourceRequests: 2,
      infiniteInitialRowCount: 0,
      maxBlocksInCache: 2,
      suppressDragLeaveHidesColumns: true,
      defaultCsvExportParams: {
        fileName: 'MT Table',
      },
      onDragStopped: (event: DragStoppedEvent<any>) => {
        console.log(event.columnApi.getColumnState());
      },
      onFirstDataRendered: (params: any) => {
        params.api.sizeColumnsToFit();
      },
    };
  }

  onGridReady = (params: any) => {
    this.griApi = params.api;
    const dataSource = {
      getRows: (param: IGetRowsParams) => {
        this.service.getUserData(param).subscribe((data) => {
          const { products = [] } = data;
          param.successCallback(products);
          params.api.sizeColumnsToFit();
        });
      },
    };
    params.api.setDatasource(dataSource);
  };
  onBtnExport() {
    console.log('onBtnExport');
    this.gridOptions.api.exportDataAsCsv();
  }
}
