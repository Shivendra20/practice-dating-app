import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { map } from 'rxjs/operators';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private baseUrl = environment.apiUrl;
  currentUser = signal<User | null>(null);

  constructor(private http: HttpClient) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.currentUser.set(JSON.parse(storedUser));
    }
  }

  login(param: User) {
    return this.http.post<User>(this.baseUrl + 'accounts/login', param).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user); 
        }
      })
    );
  }

  register(model: any) {
    return this.http.post<User>(this.baseUrl + 'accounts/register', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUser.set(user); 
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUser.set(null);  
  }

  setCurrentUser(user: User) {
    this.currentUser.set(user); 
  }
}
