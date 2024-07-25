import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PassengerService {
    constructor(private http: HttpClient) {}

    getAllData(
        page: number,
        size: number,
        nameFilter: string = ''
    ): Observable<any> {
        let params = new HttpParams()
            .set('page', page.toString())
            .set('size', size.toString());
        if (nameFilter) {
            params = params.set('name', nameFilter);
        }
        return this.http.get('https://api.instantwebtools.net/v1/passenger', {
            params,
        });
    }
}
