import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 
  constructor(private http: HttpClient){}

  baseUrl = 'http://localhost:5001/api/';
  private currentUserSource = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSource.asObservable();

 login(param: User)
 {
    return this.http.post<User>(this.baseUrl + 'accounts/login',param).pipe(
      map( (response: User) => {
        const user = response;
        if(user)
        {
          localStorage.setItem('user', JSON.stringify(user));
          this.setCurrentUser(user);
        }
      } )
    );
 }

 register(model: any)
 {
   return this.http.post<User>(this.baseUrl + "accounts/register", model).pipe(
     map(user => {
      if(user)
      {
        localStorage.setItem('user',JSON.stringify(user));
        this.currentUserSource.next(user);
      }
     })
   )
 }

  logout() 
  {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  setCurrentUser(user: User)
  {
    this.currentUserSource.next(user);
  }

}
