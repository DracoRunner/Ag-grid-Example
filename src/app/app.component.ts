import { Component, OnInit, VERSION } from '@angular/core';
import {
  ColDef,
  DragStoppedEvent,
  GridApi,
  GridOptions,
  IGetRowsParams,
} from 'ag-grid-community';
import { DataService } from './services/data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  gridOptions: GridOptions;
  griApi: GridApi;

  constructor(private service: DataService) {}

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
      onDragStopped: (event: DragStoppedEvent<any>) => {
        console.log(event.columnApi.getColumnState());
      },
    };
  }
  onGridReady = (params: any) => {
    this.griApi = params.api;
    const dataSource = {
      getRows: (param: IGetRowsParams) => {
        this.service.getTableData(param).subscribe((data) => {
          const { products = [] } = data;
          return param.successCallback(products);
        });
      },
    };
    params.api.setDatasource(dataSource);
    params.api.sizeColumnsToFit();
  };
}

const gridColumn: ColDef[] = [
  { filter: 'agNumberColumnFilter', headerName: 'Id', field: 'id' },
  {
    filter: 'agTextColumnFilter',
    headerName: 'Title',
    field: 'title',
  },
  {
    filter: 'agTextColumnFilter',
    headerName: 'Description',
    field: 'description',
  },
  {
    filter: 'agNumberColumnFilter',
    headerName: 'Price',
    field: 'price',
  },
  {
    filter: 'agNumberColumnFilter',
    headerName: 'Discount Percentage',
    field: 'discountPercentage',
  },
  { filter: 'agTextColumnFilter', headerName: 'Rating', field: 'rating' },
  {
    filter: 'agTextColumnFilter',
    headerName: 'brand',
    field: 'brand',
  },
  {
    filter: false,
    headerName: 'Images',
    field: 'images',
  },
];
