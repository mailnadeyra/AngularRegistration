import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule}from '@angular/common/http';
import { OtpComponent } from './otp/otp.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './user-list/user-list.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    OtpComponent,
    RegSuccessComponent,
    LoginComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
