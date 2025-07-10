import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/acounts.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { RegisterComponent } from '../register/register.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    standalone: false
})

export class NavComponent implements OnInit {

  model: any = {};
  currentUser$: Observable<User | null> = of(null);
  loggedInUser: string = '';

  constructor(
    private modalService: NgbModal,
    private accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
  ){
  }

  ngOnInit(): void {
      this.currentUser$ = this.accountService.currentUser$;
      this.currentUser$.subscribe({
      next: val => {
    console.log('val: ', val);

        if(val?.userName)
        this.loggedInUser = val?.userName;
      console.log('val?.username;: ', val?.userName);
      }
      });
  }

  edit()
  {
    this.modalService.open(EditProfileComponent, {
      windowClass: 'custome-class',
      backdrop: 'static'
    });
   }

   signIn() {
    this.modalService.open(RegisterComponent, {
      windowClass: 'custome-class',
      backdrop: 'static'
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
