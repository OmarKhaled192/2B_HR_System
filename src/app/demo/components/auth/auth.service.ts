import { Login } from './login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    baseurl: string = environment.baseurl + '/auth/';

    constructor(private http: HttpClient) {}

    login(body: Login): Observable<any> {
        return this.http.post(this.baseurl + 'login', body);
    }
}
