import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
};


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, 
   
  //  & & & Lazy Load * * * *
  { path: 'main', loadChildren: './components/auth-register/auth-register.module#AuthRegisterModule' }, 
  { path: 'user-profile', loadChildren: './components/user-profile/user-profile.module#UserProfileModule' }, 
  { path: 'card', loadChildren: './compoenents/bank-status/bank-status.module#BankStatusModule' },

  //  * * * 404 * ** 
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ],

      },
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
