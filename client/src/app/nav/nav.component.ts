import { Component } from '@angular/core';
import { AcountsService } from '../_services/acounts.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private accountService: AcountsService 
  ){
  }

	
  model: any = {};
  loggedIn = false;


  login()
  {
  //    this.accountService.login(this.model).subscribe((response)=>{
  //      console.log(response);
  //    });
    this.accountService.login(this.model).subscribe({
      next: res =>{
        console.log(res);
        this.loggedIn = true;

      },
      error: err =>
      {
        console.log(err);
      }
    });
  }

  logout(): void
  {
      this.loggedIn = false;
  }

}
