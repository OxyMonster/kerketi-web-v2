import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';
import { UtileService } from '../shared/services/utile.service';

@Injectable({
  providedIn: 'root'
})
export class TransferFundsService {

  public savedCustomer = {};

  proxyURL: string = 'api/';
  getBankInfoURL: string =  'users/get-bank-info';
  transferToBankURL: string = 'users/transfer-to-bank'; 
  getPayParametersURL: string = 'cards/payge/payment-parameters'; 
  payApi: string = 'https://pay.ge/pay'; 
  tbcTransactionIDurl: string = 'cards/tbc/transaction-id'; 
  eCommerceURL = 'https://ecommerce.ufc.ge/ecomm2/ClientHandler'; 
  transferURL: string = 'transactions/transfer-p2p'; 
  getTransactionsHistoryURL: string = 'transactions/history-transaction'; 
  getOtpURL: string = 'users/otp'; 
  usersURL: string = 'api/users/'


  constructor(
    private http: HttpClient,
    private envURL: EnvironmentUrlService,

  ) { }

  getBankInfo(bankInfo: any) {

    if ( !isDevMode() ) {

      return this.http.post(`${this.envURL.urlAddress + this.getBankInfoURL}`, bankInfo, ); 

    } else {

      return this.http.post(`${this.proxyURL + this.getBankInfoURL }`, bankInfo, ); 
    }
  }; 

  transferTobank(bankData: any) {
    
    if ( !isDevMode() ) {
      
      return this.http.post(`${this.envURL.urlAddress + this.transferToBankURL}`, bankData); 

    } else {

      return this.http.post(`${this.proxyURL + this.transferToBankURL}`, bankData); 

    }
  };


  getPayParamenters(payData: any) {

    if ( !isDevMode() ) {

      return this.http.post(`${this.envURL.urlAddress + this.getPayParametersURL}`, payData ); 

    } else { 

      return this.http.post(`${this.proxyURL + this.getPayParametersURL}`, payData ); 

    }
  }; 

  sendToPay(payData: any) {
          
    if ( !isDevMode() ) {
      return this.http.post(this.payApi, payData,{responseType: 'text'}); 

    } else { 

      return this.http.post('payApi', payData,{responseType: 'text'}); 
    }

  };


  getTbcTransactionID(payData) {
    if ( !isDevMode() ) {

      return this.http.post(`${this.envURL.urlAddress + this.tbcTransactionIDurl}`, payData ); 

    } else { 

      return this.http.post(`${this.proxyURL + this.tbcTransactionIDurl}`, payData ); 

    }
  }; 


  postToEcommerce(data) {
    return this.http.post(`${this.eCommerceURL}`, {'trans_id': data})
  }  

 
  getClientIP() {    
    return this.http.get("http://api.ipify.org/?format=json")
      
  };



  transferPersonToPerson(userData: any) {

    if ( !isDevMode() ) {
      
      return this.http
                 .post( `${this.envURL.urlAddress + this.transferURL}`, userData )

    } else {

      return this.http
                 .post( this.proxyURL + this.transferURL, userData )

    }
  }; 

  getOtp(userIfo: any) {

    if (!isDevMode()) {

      return this.http
                 .post( this.envURL.urlAddress + this.getOtpURL, userIfo ); 
    } else {

      return this.http
                 .post( this.proxyURL + this.getOtpURL, userIfo ); 

    }

  }; 

  getTransactionsHistory( userData: any ) {

    if ( !isDevMode() ) {
      
      return this.http
                 .post(this.envURL.urlAddress + this.getTransactionsHistoryURL, userData ); 

    } else {

      return this.http
                 .post(this.proxyURL + this.getTransactionsHistoryURL, userData ); 

    }

  }; 


  getRegisteredCards( data: any ) {

    if ( !isDevMode() ) {
      
      return this.http
                 .post(this.envURL.urlAddress + '/cards/tbc/registered-cards', data ); 

    } else {

      return this.http
                 .post(this.proxyURL + '/cards/tbc/registered-cards', data ); 

    }

  }; 

  getTbcConfirmationToken(schema) {
    
    const url = '/cards/tbc/get-confirmation-token';

    if ( !isDevMode() ) { 
      return this.http.post(this.envURL.urlAddress + url, schema ); 

    } else {
      return this.http.post(this.proxyURL + url, schema ); 

    }
  }; 

  registerNewCard(schema) {
    const url = '/cards/tbc/add-registered-card';

    if ( !isDevMode() ) { 
      return this.http.post(this.envURL.urlAddress + url, schema ); 

    } else {
      return this.http.post(this.proxyURL + url, schema ); 

    }

  };

  fillBallanceWithRegisteredCard(schema) {
    const url = '/cards/tbc/pay-by-registered-card'

    if ( !isDevMode() ) { 
      return this.http.post(this.envURL.urlAddress + url, schema ); 

    } else {
      return this.http.post(this.proxyURL + url, schema ); 

    }
  }
  




}
