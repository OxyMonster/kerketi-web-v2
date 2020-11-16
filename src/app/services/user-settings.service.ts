import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService {

  constructor(
    private http: HttpClient, 
    private envURL: EnvironmentUrlService, 

  ) { }


  changePassword( data: any) {

    const url = 'users/update-own-password'; 

    if ( !isDevMode() ) {

      return this.http.post(`${this.envURL.urlAddress + url}`, data, ); 

    } else {

      return this.http.post(`api/${url}`, data, ); 
    };
  }; 
}
