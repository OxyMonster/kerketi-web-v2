import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { HomeService } from 'src/app/services/home.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-info-ballance-logout',
  templateUrl: './user-info-ballance-logout.component.html',
  styleUrls: ['./user-info-ballance-logout.component.scss']
})
export class UserInfoBallanceLogoutComponent implements OnInit {

  faSignOutAlt = faSignOutAlt; 
  
  userData: any[] = []; 

  constructor(
    private _utileService: UtileService,
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getUserInfo(); 
  }


  getUserInfo() {
    const userInfo = {
      languageId: this._utileService.getUserLanguage(),
      msisdn: this._utileService.getMsidn(),
      sessionId: localStorage.getItem('sessionId')
    }; 

    console.log(userInfo);
    
    this._homeService
        .getUserInfo(userInfo)
        .subscribe( data => {

          if (data['isSuccess']) {

            this.userData = [data['data']];
            this._homeService.setUserData(this.userData);  
            console.log(this._homeService.userData);
            
            
          } else {
            this._utileService.logOut(); 
          }
          
          
        }, err => console.log(err) )
  }; 


  logOut() {

    this._utileService.logOut(); 
  }



}
