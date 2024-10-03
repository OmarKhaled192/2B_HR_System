import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LockupsService } from '../../service/lockups.service';

@Injectable({
    providedIn: 'root',
})
export class AuthService extends LockupsService {

    constructor(http: HttpClient) {
        super(http);
    }

    login(body: Login): Observable<any> {
        return this.http.post(`${this.baseurl}/Auth/login?culture=${this.culture}`, body);
    }
}
