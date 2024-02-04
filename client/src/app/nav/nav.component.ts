import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/acounts.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
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
      next: () =>
      {
        this.router.navigateByUrl('/members');
        this.toastr.success("Logged In successfully.")
      }
    });
  }

  logout(): void
  {
      this.accountService.logout();
      this.router.navigateByUrl('/');
  }

}
