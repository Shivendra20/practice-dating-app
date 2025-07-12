import { Component, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/acounts.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: false
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accountService: AccountService,
      public activeModal: NgbActiveModal
  ) { }

  onRegister() {
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.onCancel();
      },
      error: error => { console.log(error) }
    });
  }

  onCancel() {
    this.activeModal.close();
  }

}
