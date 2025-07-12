import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  providers: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
        positionClass: 'toast-bottom-right'
        }),
    AlertModule.forRoot(),
  ]
})
export class SharedModule { }
