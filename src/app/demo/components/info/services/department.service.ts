import { Department } from './../models/department';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { options } from '@fullcalendar/core/preact';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class DepartmentService {
    baseurl: string = environment.baseurl;

    constructor(private http: HttpClient) {}

    registerDepartment(options: Department): Observable<any> {
        return this.http.post(`${this.baseurl}/Department/register`, options);
    }
    getAllDepartments(): Observable<any> {
        return this.http.get(`${this.baseurl}/Department/GetAll`);
    }
}
