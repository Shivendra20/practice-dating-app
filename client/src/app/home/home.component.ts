import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { AccountService } from '../_services/acounts.service';
import { ChangeDetectorRef } from '@angular/core';
import { User } from '../types/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent implements OnInit {
  registerMode: boolean = true;
  users: any;
  currentUser = signal<User | null>(null);
  loggedInUser: any;

  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.currentUser = this.accountService.currentUser;
        if (this.currentUser()) {
          this.registerMode = false;
          this.loggedInUser = this.currentUser()?.username || '';
        }
  }

  getUsers(): void {
    this.http.get('http://localhost:5001/api/users').subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => { console.log(error); },
      complete: () => { console.log('Request has completed.') },
    });
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
    this.cdr.detectChanges();
  }

}
