import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component' 
import { ContactComponent } from './contact/contact.component' 
import { AuthorizeHeaderComponent } from './authorize-header/authorize-header.component' 
import { AuthLoginComponent } from './auth-login/auth-login.component'
import { LoginOtpComponent } from './auth-login/login-otp/login-otp.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRegisterRoutingModule } from "./auth-register-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { AuthRegisterComponent } from './auth-register.component';
import { RegisterModule } from "./register/register.module";

@NgModule({
  declarations: [ 
    AuthorizeHeaderComponent,
    AuthLoginComponent,   
    LoginOtpComponent,
    AboutUsComponent,
    ContactComponent, 
    AuthRegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule, 
    FormsModule,
    ReactiveFormsModule,
    AuthRegisterRoutingModule,
    HttpClientModule,
    RegisterModule
  ],
  providers: [
    AuthorizeService
  ]
})
export class AuthRegisterModule { }
