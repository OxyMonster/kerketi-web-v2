import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { UtileService } from 'src/app/shared/services/utile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private _utileService: UtileService,
    private router: Router
  ) { }

  canActivate(): boolean {  
    if ( this._utileService.isLoggedIn() ) {
        if ( this._utileService.isSessionIDValid() ) {
          
          return true;

        } else{

          return false;
        }  
 
    } else {  
      
      this.router.navigate(['main']); 
      return false;
    
    }
  }; 
 
}
