import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-authorize',
  templateUrl: './authorize.component.html',
  styleUrls: ['./authorize.component.scss']
})

export class AuthorizeComponent implements OnInit {

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
