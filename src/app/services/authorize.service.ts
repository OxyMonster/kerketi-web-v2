import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { EnvironmentUrlService } from 'src/app/shared/services/environment-url.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {
  
  loginURL: string = 'users/login'; 
  updatePassURL: string = 'users/update-own-password'; 

  constructor(
    private http: HttpClient,
    private envURL: EnvironmentUrlService
  ) { }

  userLogin(userForm: Object) {

      if (!isDevMode()) {
        
        return this.http.post(this.envURL.urlAddress + this.loginURL, userForm ); 

      } else {
        
        return this.http.post(`api/${this.loginURL}`, userForm);
      }
  }; 


  updateOwnPassword(userForm: Object) {
    
    if (!isDevMode()) {

      return this.http.post(this.envURL + this.updatePassURL, userForm); 

    } else {
      
      return this.http.post( `api/${this.updatePassURL}`, userForm ); 
    }
  }; 

  otpUnauthenticated(data) {
    const url = 'users/otp-unauthenticated'; 

    if (!isDevMode()) {

      return this.http.post(this.envURL.urlAddress + url, data); 

    } else {
      
      return this.http.post( `api/${url}`, data); 
    }
  };


}
