import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LockupsService } from 'src/app/demo/service/lockups.service';

@Injectable({
  providedIn: 'root'
})
export class ShiftVacationService extends LockupsService {

    constructor(http: HttpClient) {
        super(http);
    }

    getDropDown(field: string) {
        return this.http.get(`${this.baseurl}/${field}/getDropDown`);
    }

    getShiftById(id: number): Observable<any> {
        return this.http.get(`${this.baseurl}/shift/${id}`);
    }
}
