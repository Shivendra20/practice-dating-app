import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcountsService {
 
  constructor(private http: HttpClient){}

  baseUrl = 'http://localhost:5001/api/';

 login(param: any)
 {
    console.log(param);
    return this.http.post(this.baseUrl + 'accounts/login',param);
 }
}
