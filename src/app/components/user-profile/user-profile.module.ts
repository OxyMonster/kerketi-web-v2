import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { FundCashingComponent } from './fund-cashing/fund-cashing.component';
import { HomeModule } from "./home/home.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { TransferFundsModule } from "src/app/components/user-profile/transfer-funds/transfer-funds.module";
import { PaymentsModule } from "src/app/components/user-profile/payments/payments.module";
import { FillBallanceModule } from "./fill-ballance/fill-ballance.module";

@NgModule({
  declarations: [
    FundCashingComponent

  ],
  imports: [
    CommonModule,
    HomeModule, 
    TransferFundsModule,  
    PaymentsModule,
    FillBallanceModule, 
    SharedModule,
    UserProfileRoutingModule,
  ]
})
export class UserProfileModule { }
