import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HealthInformationService {

  private myAppUrl: String ;
  private myApiUrl: String;


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/beneficiaries/birthinformation/';
  }

  updateBeneficiaryHealth(numDoc: string, beneficiaryData: any): Observable<any> {
    const url = `${this.myAppUrl}${this.myApiUrl}${numDoc}`;
    return this.http.patch(url, beneficiaryData);
  }

}