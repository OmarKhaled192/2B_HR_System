import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  baseUrl:string = environment.baseurl;

  constructor(private http: HttpClient) { }

  GetAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/api/Bank/GetAll`)
  }
}
