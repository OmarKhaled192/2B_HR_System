import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class LockupsService {
    baseurl: string;
    endPoint: string;

    constructor(protected http: HttpClient) {
        this.baseurl = environment.baseurl;
    }

    setEndPoint(val: string) {
        this.endPoint = val;
    }

    GetById(id: number): Observable<any> {
        return this.http.get(`${this.baseurl}/${this.endPoint}/${id}`);
    }

    GetAll(body: any): Observable<any> {
        return this.http.post(`${this.baseurl}/${this.endPoint}`, body);
    }

    GetPage(body: any): Observable<any> {
        return this.http.post(`${this.baseurl}/${this.endPoint}`, body);
    }

    Register(body: any): Observable<any> {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/register`,
            body
        );
    }

    Edit(body: any): Observable<any> {
        return this.http.post(`${this.baseurl}/${this.endPoint}/Edit`, body);
    }

    DeleteSoftById(id: number): Observable<any> {
        return this.http.delete(
            `${this.baseurl}/${this.endPoint}/DeleteSoftById/${id}`
        );
    }

    DeleteRangeSoft(body: number[]): Observable<any> {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/DeleteRangeSoft`,
            body
        );
    }
    getDropdown(): Observable<any> {
        return this.http.get(`${this.baseurl}/${this.endPoint}/getDropDown`);
    }
}
