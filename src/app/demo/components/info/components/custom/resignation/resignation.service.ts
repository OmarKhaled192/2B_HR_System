import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LockupsService } from 'src/app/demo/service/lockups.service';

@Injectable({
  providedIn: 'root'
})
export class ResignationService extends LockupsService {

  constructor(http:HttpClient) {
    super(http);
   }

   updateHrAccept(body: any) {
    return this.http.post(
        `${this.baseurl}/${this.endPoint}/HRAccept`,
        body
    );
}
}
