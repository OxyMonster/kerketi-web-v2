import { Injectable, isDevMode } from '@angular/core';
import { EnvironmentUrlService } from '../shared/services/environment-url.service';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  proxyURL:string = 'api/users/'; 
  getUserInfoURL: string = 'users/get-user-info'; 

  userData: Subject<any>; 

  public filteredDate: any; 
  
  constructor(
    private http: HttpClient,  
    private envURL: EnvironmentUrlService

  ) { 

  }

  getUserInfo(userInfo: any) {
    
    if ( !isDevMode() ) {

      return this.http.post(this.envURL.urlAddress + this.getUserInfoURL, userInfo ); 

    } else {

      return this.http.post('api/' + this.getUserInfoURL, userInfo ); 

    }
  }; 

  setUserData(data: any) {
    this.userData = data; 
    console.log(this.userData);
    
  };

  getCurrencyRates() {
    const url = '/lookup/crystal-currency-rates';

    if (!isDevMode()) {  

      return this.http.get(this.envURL.urlAddress + url); 

    } else {

      return this.http.get('api/' + url ); 
    }; 
  }

}
