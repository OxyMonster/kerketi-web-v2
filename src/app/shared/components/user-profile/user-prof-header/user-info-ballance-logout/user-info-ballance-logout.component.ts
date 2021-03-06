import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { HomeService } from 'src/app/services/home.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-info-ballance-logout',
  templateUrl: './user-info-ballance-logout.component.html',
  styleUrls: ['./user-info-ballance-logout.component.scss']
})
export class UserInfoBallanceLogoutComponent implements OnInit {

  faSignOutAlt = faSignOutAlt; 
  
  userData: any= []; 

  constructor(
    private _utileService: UtileService,
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.getUserInfo(); 
  }


  getUserInfo() {
    const userInfo = {
      domainId: 2,
      languageId: this._utileService.getUserLanguage(),
      username: this._utileService.getMsidn(),
      sessionId: localStorage.getItem('sessionId')
    }; 

    console.log(userInfo);
    
    this._homeService
        .getUserInfo(userInfo)
        .subscribe( data => {

          if (data['isSuccess']) {

            this.userData = [data['data']];
            this._homeService.userData = this.userData; 
            
          } else {  
            this._utileService.logOut(); 
          }
          
          
        }, err => console.log(err) )
  }; 


  logOut() {

    this._utileService.logOut(); 
  }



}
