import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../modals';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}

  getUserData(param: any): Observable<UserResponse> {
    return this.http.get<UserResponse>('https://dummyjson.com/products');
  }
}
