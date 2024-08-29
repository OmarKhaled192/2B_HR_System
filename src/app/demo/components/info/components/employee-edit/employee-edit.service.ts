import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LockupsService } from 'src/app/demo/service/lockups.service';

@Injectable({
    providedIn: 'root',
})
export class EmployeeEditService extends LockupsService {
    constructor(http: HttpClient) {
        super(http);
    }
    getEnum(field: string): Observable<any> {
        return this.http.get(`${this.baseurl}/Enums/${field}`);
    }

    getDropdownField(field: any): Observable<any> {
        return this.http.get(`${this.baseurl}/${field}/getDropDown`);
    }
    updateEmployeeImage(body: any): Observable<any> {
        return this.http.post(
            `${this.baseurl}/Employee/UpdatEmployeeImage`,
            body
        );
    }
}
