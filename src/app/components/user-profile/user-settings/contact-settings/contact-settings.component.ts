import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomeService } from 'src/app/services/home.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-contact-settings',
  templateUrl: './contact-settings.component.html',
  styleUrls: ['./contact-settings.component.scss']
})
export class ContactSettingsComponent implements OnInit {

  userData: Observable<any>; 

  constructor(
    private _homeService: HomeService,
    private _utileService: UtileService
  ) { }

  ngOnInit(): void {
    console.log("*********");
    this.getUserInfo();
    
  }




  getUserInfo() {

    if ( this._homeService.userData ) {
      this.userData = this._homeService.userData[0];  
      console.log(this.userData);
    } else {
      const schema = {
        domainId: 2,
        languageId: this._utileService.getUserLanguage(),
        username: this._utileService.getMsidn(),
        sessionId: localStorage.getItem('sessionId')
      }; 

      return this._homeService
                 .getUserInfo(schema)
                 .subscribe( data => {
                   this.userData = data['data']
                   console.log(this.userData);
                   
                   
                 }, err => {
                   console.log(err);
                   
                 })
    }
    
  }

}
