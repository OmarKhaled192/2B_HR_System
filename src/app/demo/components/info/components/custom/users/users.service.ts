import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LockupsService } from 'src/app/demo/service/lockups.service';

@Injectable({
    providedIn: 'root',
})
export class UsersService extends LockupsService {
    constructor(http: HttpClient) {
        super(http);
    }

    updateUserLocked(body: any) {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/UpdateUserLocked`,
            body
        );
    }
    assignRoles(userId: number, rolesIds: number[]) {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/assignroles/${userId}`,
            rolesIds
        );
    }
    changePassword(userId: number, body: any) {
        return this.http.post(
            `${this.baseurl}/${this.endPoint}/changepassword/${userId}`,
            body
        );
    }

    getDropdownField(field: any): Observable<any> {
        return this.http.get(
            `${this.baseurl}/${field}/getDropDown/?culture=${this.culture}`
        );
    }
}
