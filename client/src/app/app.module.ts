import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotificationLogComponent } from "./notification-log/notification-log.component";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        AlertModule.forRoot(),
        NotificationLogComponent
    ]
})
export class AppModule { }
