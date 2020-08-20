import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  proxyURL: string = 'api/transactions/';
  
  billerData: any[] = []; 

  constructor(
    private http: HttpClient,
    private envURL: EnvironmentUrlService

  ) { 
    
  }


  getBillers(langId: string) {
    const billersUrl = 'get-billers'; 

    if ( !isDevMode() ) {

      return this.http
                 .post(this.envURL.urlAddress + 'transactions/' + billersUrl, {"languageId": langId} );

    } else {

      return this.http
                 .post(this.proxyURL + billersUrl, {"languageId": langId} );
    }
  }; 

  setBillers(billerData: any) {
    this.billerData = billerData; 
  }; 

  getDebt(billerInfo: any) {
    const getDebturl = 'get-debt';

    if ( !isDevMode() ) {

      return this.http.post(this.envURL.urlAddress + 'transactions/' + getDebturl, billerInfo); 

    } else { 

      return this.http.post(this.proxyURL + getDebturl, billerInfo); 
    }
  }

  payBill(billerInfo: any) {
    const billPaymentUrl = 'bill-payment'; 

    if (  !isDevMode() ) {

      return this.http.post(this.envURL.urlAddress + 'transactions/' +  billPaymentUrl, billerInfo); 

    } else  {

      return this.http.post(this.proxyURL + billPaymentUrl, billerInfo); 

    }
  }

  getTemplates(tempateData: any) {
    const proxyTemplatesURL = 'api/users/get-templates'
    const templatesURL = 'users/get-templates';

    if ( !isDevMode() ) {
      
      return this.http.post(`${this.envURL.urlAddress + templatesURL}`, tempateData)

    } else {

      return this.http.post(proxyTemplatesURL, tempateData)

    };


  }

  addTemplates(templatesData: any) {
    const templatesURL = 'users/add-templates'
    const proxyTemplatesURL = 'api/users/add-templates'

    if ( !isDevMode() ) {

      return this.http.post(`${this.envURL.urlAddress + templatesURL}`, templatesData)

    } else { 

      return this.http.post(proxyTemplatesURL, templatesData)

    }
  }

  deleteTemplates(templatesData: any) {
    const templatesURL = 'users/delete-templates'; 
    const proxyTemplatesURL = 'api/users/delete-templates'; 
    
    if ( !isDevMode() ) {

      return this.http.post(`${this.envURL.urlAddress + templatesURL}`, templatesData); 

    } else {

      return this.http.post(proxyTemplatesURL, templatesData); 

    }
  }

}
