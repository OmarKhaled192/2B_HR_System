import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LockupsService } from 'src/app/demo/service/lockups.service';

@Injectable({
  providedIn: 'root'
})
export class SetEmployeeShiftsService extends LockupsService {

    constructor(http: HttpClient) {
        super(http);
    }

    getDropdownField(field: any): Observable<any> {
        return this.http.get(
            `${this.baseurl}/${field}/getDropDown/?culture=${this.culture}`
        );
    }

    getEmployeeByDepartment(deptId: any):Observable<any> {
        return this.http.get(
            `${this.baseurl}/Employee/GetEmployeesByDepartmentId?DepartmentId=${deptId}&culture=${this.culture}`
        );
    }

    UpdateEmployeesShift(body: any) :Observable<any> {
        return this.http.get(
            `${this.baseurl}/Employee/UpdateEmployeesShift`, body
        );
    }

}
