import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
})
export class PaginationService {
    baseurl: string = environment.baseurl;
    endPoint: string = 'Department';

    constructor(private http: HttpClient) {}

    GetAll(): Observable<any> {
        return this.http.get(`${this.baseurl}/${this.endPoint}/GetAll`);
    }

    GetPage(body: any): Observable<any> {
        return this.http.post(`${this.baseurl}/${this.endPoint}/`, body);
    }

    Register(body: any): Observable<any> {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/register`,
            body
        );
    }

    Edit(body: any): Observable<any> {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/Edit/`,
            body
        );
    }

    DeleteSoftById(id: number): Observable<any> {
        return this.http.delete(
            `${this.baseurl}/${this.endPoint}/DeleteSoftById/${id}`
        );
    }

    DeleteRangeSoft(body: any): Observable<any> {
        return this.http.delete(
            `${this.baseurl}/${this.endPoint}/DeleteRangeSoft`,
            body
        );
    }
}
