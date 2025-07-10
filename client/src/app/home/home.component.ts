import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/acounts.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  registerMode = true;
  users : any;
  currentUser$: any;
  loggedInUser: any;

  constructor(
    private http: HttpClient,
    private accountService: AccountService,
    ) {}

  ngOnInit(): void {
     this.currentUser$ = this.accountService.currentUser$;
     console.log('this.currentUser$: ', this.currentUser$);
     console.log('registerMode', this.registerMode);
     this.currentUser$.subscribe({
     next: (val: any) => {
       if(val?.username)
        {
          this.registerMode = false;
          this.loggedInUser = val?.userName;
        }
     }
     });
  }

  ngOnChanges()
  {
    console.log(this.registerMode);
  }

  getUsers()
  {
    this.http.get('http://localhost:5001/api/users').subscribe({
      next: (response) =>{ this.users = response;
       // console.log(this.users);
       },
      error: (error)=>{ console.log(error); },
      complete: () => { console.log('Request has completed.') },
    });
  }

  registerToggle()
  {
    this.registerMode = true;
  }

  cancelRegisterMode(event: boolean) {
    console.log(event);
    this.registerMode = event;
    }

}
