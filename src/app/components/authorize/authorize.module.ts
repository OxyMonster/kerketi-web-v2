import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizeComponent } from './authorize.component';
import { AuthorizeRoutingModule } from "./authorize-routing.module";
import { AuthorizeService } from "../../services/authorize.service";
import { AuthorizeHeaderComponent } from './authorize-header/authorize-header.component';
import { AuthLoginComponent } from "./auth-login/auth-login.component";
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ 
    AuthorizeComponent, 
    AuthorizeHeaderComponent,
    AuthLoginComponent,
    AboutUsComponent,
    ContactComponent,
    HowItWorksComponent,
  ],
  imports: [
    CommonModule,   
    SharedModule,
    AuthorizeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    AuthorizeService
  ]
})
export class AuthorizeModule { }
