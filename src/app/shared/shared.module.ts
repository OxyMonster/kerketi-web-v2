import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EnvironmentUrlService } from "./services/environment-url.service";
import { BurgerComponent } from './components/burger/burger.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { UserProfNavigationComponent } from './components/user-profile/user-prof-navigation/user-prof-navigation.component';
import { UserProfHeaderComponent } from './components/user-profile/user-prof-header/user-prof-header.component';

const COMPONENTS = [
  PageNotFoundComponent, 
  LoadingSpinnerComponent,
  BurgerComponent,
  UserProfNavigationComponent, 
  UserProfHeaderComponent
]


@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ], 
  providers: [
    EnvironmentUrlService
  ], 
  exports: [
    COMPONENTS
  ]
})
export class SharedModule { }
