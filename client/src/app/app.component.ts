import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/acounts.service';
import { User } from './_models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Dating App';
  users: any;

  constructor(
    private http: HttpClient,
    private accountsService:AccountService,
    ) {}

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  getUsers() {
    this.http.get('http://localhost:5001/api/users').subscribe({
      next: (response) =>{
        this.users = response
      },
      error: (error)=>{ console.log(error); }
    });
  }

  setCurrentUser() {
    const userString = localStorage.getItem('user');
    if(!userString) return
      const user: User = JSON.parse(userString);
      this.accountsService.setCurrentUser(user);
  }

}
