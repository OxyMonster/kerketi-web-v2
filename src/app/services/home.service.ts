import { Injectable, isDevMode } from '@angular/core';
import { EnvironmentUrlService } from '../shared/services/environment-url.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  proxyURL:string = 'api/users/'; 
  getUserInfoURL: string = 'users/get-user-info'; 

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

}
