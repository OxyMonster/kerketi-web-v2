import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { HomeService } from "../../../services/home.service";
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ExchangeCurrencyRateComponent } from './exchange-currency-rate/exchange-currency-rate.component';
import { WalletsComponent } from './wallets/wallets.component';
import { LastTransactionsComponent } from './last-transactions/last-transactions.component';

const COMPONENTS = [
  HomeComponent
]

@NgModule({
  declarations: [ COMPONENTS, HomeBannerComponent, ExchangeCurrencyRateComponent, WalletsComponent, LastTransactionsComponent ],
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
