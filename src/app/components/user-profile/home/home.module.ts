import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { HomeService } from "../../../services/home.service";
import { SharedModule } from 'src/app/shared/shared.module';
import { ExchangeCurrencyRateComponent } from './exchange-currency-rate/exchange-currency-rate.component';
import { WalletsComponent } from './wallets/wallets.component';
import { LastTransactionsComponent } from './last-transactions/last-transactions.component';

const COMPONENTS = [
  HomeComponent,
  ExchangeCurrencyRateComponent, 
  WalletsComponent,   
  LastTransactionsComponent
]

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    HomeService
  ], 
  exports : [
    COMPONENTS
  ]
})
export class HomeModule { }
