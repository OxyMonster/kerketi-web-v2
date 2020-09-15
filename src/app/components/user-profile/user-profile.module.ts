import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileRoutingModule } from "./user-profile-routing.module";
import { FundCashingComponent } from './fund-cashing/fund-cashing.component';
import { HomeModule } from "./home/home.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { TransferFundsModule } from "src/app/components/user-profile/transfer-funds/transfer-funds.module";
import { FillBallanceModule } from "./fill-ballance/fill-ballance.module";
import { TransactionsModule } from "./transactions/transactions.module";

@NgModule({
  declarations: [
    FundCashingComponent,

  ],
  imports: [
    CommonModule,
    HomeModule,   
    TransferFundsModule,  
    FillBallanceModule, 
    TransactionsModule,
    SharedModule,
    UserProfileRoutingModule,
  ]
})
export class UserProfileModule { }
