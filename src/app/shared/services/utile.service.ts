import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { EnvironmentUrlService } from './environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private envURL: EnvironmentUrlService,
    private _trasnferFundsService: TransferFundsService
  ) { }

  getMsidn() {
    return localStorage.getItem('msisdn'); 
  };

  getUserLanguage() {
    return localStorage.getItem('languageId'); 
  }; 

  getSessionId() {
    return localStorage.getItem('sessionId');
  }

  isLoggedIn() {
    return !!localStorage.getItem('sessionId')
  }; 

  isSessionIDValid() {
    const parameters = {
      "amount": 0,
      "currency": "GEL",
      "description": "login",
      "domainId": 0,
      "languageId": 1,
      "msisdn": this.getMsidn(),
      "sessionId": this.getSessionId() 
    }; 
 
    return this._trasnferFundsService
               .getPayParamenters(parameters)
               .subscribe(data => {
                console.log(data);
                
                return data['isSuccess']; 

               }, err => {
                 
                 return err['isSuccess'];
               })
  }; 

  logOut() {
    this.router.navigate(['/main/login']); 
    return localStorage.clear(); 

  }; 

  refreshSession(parameters: any) {

    const url = '/users/refresh-session'

      if (! isDevMode() ) {

        return this.http.post(this.envURL.urlAddress + url, parameters); 

      } else {

        return this.http.post('api/' + url, parameters); 

      }; 
  };

}
