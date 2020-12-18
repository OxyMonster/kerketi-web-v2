import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  constructor(
    private _translateService: TranslateService
    ) { 

    this._translateService.addLangs(['en','geo'])
    this._translateService.setDefaultLang('geo');
    this._translateService.use('geo');
      
  }

  ngOnInit(): void {
    
  }

}
