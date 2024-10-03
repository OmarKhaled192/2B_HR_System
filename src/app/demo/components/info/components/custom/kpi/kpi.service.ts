import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LockupsService } from 'src/app/demo/service/lockups.service';

@Injectable({
    providedIn: 'root',
})
export class KpiService extends LockupsService {
    constructor(http: HttpClient) {
        super(http);
    }

    getRequestTypeDropdown(): Observable<any> {
        return this.http.get(
            `${this.baseurl}/Enums/getRequestType/?culture=${this.culture}`
        );
    }

    getMonthDropdown(): Observable<any> {
        return this.http.get(
            `${this.baseurl}/Enums/getMonth/?culture=${this.culture}`
        );
    }
    getManagerDropdown(): Observable<any> {
        return this.http.get(
            `${this.baseurl}/Employee/GetMangerDropDown/?culture=${this.culture}`
        );
    }

    getDropdownField(field: string): Observable<any> {
        return this.http.get(
            `${this.baseurl}/${field}/getDropDown/?culture=${this.culture}`
        );
    }

    updateRequestType(body: any) {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/UpdateRequestType`,
            body
        );
    }

    updateRequestTypeRange(body: number[], requestType: number) {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/UpdateRequestTypeRange?RequestType=${requestType}`,
            body
        );
    }
}
