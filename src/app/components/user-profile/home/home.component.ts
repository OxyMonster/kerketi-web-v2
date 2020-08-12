import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userData: any[] = []; 
  walletsList: any[] = []; 

  constructor(
    private _homeService: HomeService,
    private _utileService: UtileService
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
            this.userData.map( item => {
            this.walletsList = item.wallets; 
            console.log(this.walletsList);
            
              
;             })

          } else {
            this._utileService.logOut(); 
          }
          
          
        }, err => console.log(err) )
  }; 

}
