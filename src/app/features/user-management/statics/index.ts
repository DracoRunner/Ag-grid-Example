import { ColDef } from 'ag-grid-community';

export const gridColumn: ColDef[] = [
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
];
