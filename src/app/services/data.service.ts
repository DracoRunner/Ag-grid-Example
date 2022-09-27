import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponse } from '../static';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient) {}

  getTableData(param: any): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('https://dummyjson.com/products');
  }
}
