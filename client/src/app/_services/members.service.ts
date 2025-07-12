import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Member } from '../types/member';

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;


  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'members', this.getHttpOptions());
  }

  getMeber(id: string) {
    return this.http.get<Member>(this.baseUrl + 'members/' + id, this.getHttpOptions());
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${localStorage.getItem('token')}`
      })
    };
  }
}