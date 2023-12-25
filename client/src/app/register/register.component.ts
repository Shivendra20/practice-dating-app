import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/acounts.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService)
  {}

  ngOnInit(): void {
    
  }

  onRegister()
  {
    this.accountService.register(this.model).subscribe({
      next: reponse =>{
        this.onCancel();
      },
      error : error => { console.log(error) }
    });
  }

  onCancel()
  {
    this.cancelRegister.emit(false);
  }

}
