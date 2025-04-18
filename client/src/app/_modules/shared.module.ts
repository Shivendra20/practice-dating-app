import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownDirective, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  providers: [BsDropdownDirective],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
        positionClass: 'toast-bottom-right'
        }),
    AlertModule.forRoot(),
  ]
})
export class SharedModule { }
