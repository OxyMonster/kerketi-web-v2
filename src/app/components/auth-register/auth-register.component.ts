import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss']
})
export class AuthRegisterComponent implements OnInit {

  

  constructor(
    private _translateService: TranslateService,
    private router: Router
    ) { 

    this._translateService.addLangs(['en','geo'])
    this._translateService.setDefaultLang('geo');
    this._translateService.use('geo');
      
  }

  ngOnInit(): void {
    this.isPulsarActive();
  }

  isPulsarActive() {
    this.router.url === '/main/register';
    console.log(this.router.url);
    
  }

}
