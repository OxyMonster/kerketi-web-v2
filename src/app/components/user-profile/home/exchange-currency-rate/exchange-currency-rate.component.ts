import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-exchange-currency-rate',
  templateUrl: './exchange-currency-rate.component.html',
  styleUrls: ['./exchange-currency-rate.component.scss']
})
export class ExchangeCurrencyRateComponent implements OnInit {

  currencyRates: {} = {};
  isSuccess: boolean = false; 

  constructor(
    private _homeService: HomeService
  ) { 
  }

  ngOnInit(): void {
    this.getCurrencyRates(); 
  };


  getCurrencyRates() {

    return this._homeService
               .getCurrencyRates()
               .subscribe( data => {
                console.log(data);
                if ( data['rates']) {
                  this.isSuccess = true;
                  this.currencyRates['usd'] = data['rates'][0];
                  this.currencyRates['eur'] = data['rates'][1];
                  this.currencyRates['gbp'] = data['rates'][4];
                  this.unSubscribeCurrency();
                } else {
                  this.unSubscribeCurrency();
                  console.log("not rates ;((");
                  this.isSuccess = false;
                }
                 
               }, err => {
                 console.log(err);
                 this.unSubscribeCurrency();
               });  
  };

  unSubscribeCurrency() {
    return this.getCurrencyRates().unsubscribe(); 
  }

}
