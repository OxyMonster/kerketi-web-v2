import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FillBallanceComponent } from './fill-ballance/fill-ballance.component';
import { FundCashingComponent } from './fund-cashing/fund-cashing.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { BillingComponent } from './billing/billing.component';
import { AuthGuard } from "src/app/shared/guard/auth.component";
import { UserProfileComponent } from './user-profile.component';


const routes: Routes = [
  { path: '', canActivate: [ AuthGuard ], component: UserProfileComponent, children: [

    { path: '', redirectTo: 'home', pathMatch:'full' }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'fill-ballance', component: FillBallanceComponent },
    { path: 'fund-cashing', component: FundCashingComponent }, 
    { path: 'transfer-funds', component: TransferFundsComponent },
    { path: 'billing', component: BillingComponent }

  ]},
  


];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
