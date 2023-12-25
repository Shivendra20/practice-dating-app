import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/acounts.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  model: any = {};
  currentUser$: Observable<User | null> = of(null);
  loggedInUser: string = '';

  constructor(
    private accountService: AccountService 
  ){
  }

  ngOnInit(): void {
      this.currentUser$ = this.accountService.currentUser$;
      this.currentUser$.subscribe({
      next: val => {
        if(val?.userName)
        this.loggedInUser = val?.userName;
      }
      });
  }


  login()
  {
    this.accountService.login(this.model).subscribe({
      next: res =>{
        console.log(res);
      },
      error: err =>
      {
        console.log(err);
      }
    });
  }

  logout(): void
  {
      this.accountService.logout();
  }

}
