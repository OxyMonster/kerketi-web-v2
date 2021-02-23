import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { ContactComponent } from './contact/contact.component';
import { AuthRegisterComponent } from './auth-register.component';
import { RegisterComponent } from './register/register/register.component';


const routes: Routes = [
  { path: '',  component: AuthRegisterComponent, children: [
    { path: '', redirectTo: 'login', pathMatch:'full' }, 
    { path: 'login', component: AuthLoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'how-it-works', component: HowItWorksComponent },
    { path: 'contact', component: ContactComponent },
  ]},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class AuthRegisterRoutingModule { }
