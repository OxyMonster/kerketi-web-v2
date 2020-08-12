import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtileService {

  private sessionStatus= new Subject<String>();


  constructor(
    private router: Router
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
    return !!localStorage.getItem('sessionId'); 
  }; 

  isSessionExpired() {
    return localStorage.getItem('sessionAlive')
    
  }; 

  logOut() {
    this.router.navigate(['/login']); 
    return localStorage.clear(); 

  }; 


  setSessionStatus(data: string) {
    localStorage.setItem('sessionAlive', data);
    this.sessionStatus.next(data);
  }; 

  watchssionStatus(): Observable<any> {
    return this.sessionStatus.asObservable();
  }; 

}
