import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class UserDataService {
    baseUrl: string = environment.baseurl;
    constructor(private http: HttpClient) {}
    getUserData(userId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/Employee/${userId}`);
    }
}
