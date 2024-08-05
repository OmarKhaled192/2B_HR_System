import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartitionService {

    baseurl: string;
    endPoint: string;

    constructor(private http: HttpClient) {
        this.baseurl = environment.baseurl;
    }

    setEndPoint(val: string) {
        this.endPoint = val;
    }

    getDropDown(field: string) {
        return this.http.get(`${this.baseurl}/${field}/getDropDown`);
    }
}
