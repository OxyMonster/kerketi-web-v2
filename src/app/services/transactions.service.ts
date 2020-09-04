import { Injectable, isDevMode } from '@angular/core';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  
  proxyURL: string = 'api/';
  
  constructor(
    private envURL: EnvironmentUrlService,
    private http: HttpClient
  ) { }


  getTransactionsHistory( getTransactionsData ) {
    const getTransactionsURL = '/transactions/history-transaction'; 
    if ( !isDevMode() ) {

      return this.http.post(this.envURL.urlAddress + getTransactionsURL, getTransactionsData ); 

    } else { 

      return this.http.post('api/' + getTransactionsURL, getTransactionsData ); 
    }
  }
}
