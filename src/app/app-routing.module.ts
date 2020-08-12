import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, 
   
  //  & & & Lazy Load * * * *
  { path: 'main', loadChildren: './components/authorize/authorize.module#AuthorizeModule' }, 
  { path: 'user-profile', loadChildren: './components/user-profile/user-profile.module#UserProfileModule' }, 
  { path: 'card', loadChildren: './compoenents/bank-status/bank-status.module#BankStatusModule' },

  //  * * * 404 * ** 
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
