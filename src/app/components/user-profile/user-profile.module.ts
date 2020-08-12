import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { HomeComponent } from './home/home.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { FillBallanceComponent } from './fill-ballance/fill-ballance.component';
import { FundCashingComponent } from './fund-cashing/fund-cashing.component';
import { BillingComponent } from './billing/billing.component';
import { HomeModule } from "./home/home.module";

@NgModule({
  declarations: [
    TransferFundsComponent, 
    FillBallanceComponent, 
    FundCashingComponent, 
    BillingComponent
  ],
  imports: [
    CommonModule,
    HomeModule, 
    UserProfileRoutingModule,
  ]
})
export class UserProfileModule { }
