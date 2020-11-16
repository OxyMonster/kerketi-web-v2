import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {

 
  userData: any[] = []; 
  walletsList: any[] = []; 
  availableBallance: number = 0; 

  constructor(
    private _homeService: HomeService,
    private _utileService: UtileService
  ) { }

  ngOnInit(): void {
    this.getUserInfo();
  }


  getUserInfo() {
    const userInfo = {
        "domainId": 2,
        "languageId": this._utileService.getUserLanguage(),
        "sessionId": this._utileService.getSessionId(),
        "username": this._utileService.getMsidn()
    }; 

    console.log(userInfo);
    
    this._homeService
        .getUserInfo(userInfo)
        .subscribe( data => {

          if (data['isSuccess']) {

            this.userData = [data['data']]; 

            this.userData.map( item => {
            this.walletsList = item.wallets; 
            
            this.walletsList.map(wallet => {
              console.log(wallet['balanceCurrent']);
              this.availableBallance += wallet['balanceCurrent']; 
              
            })
            
            
              
            })

          } else {
            this._utileService.logOut(); 
          }
          
          
        }, err => console.log(err) )
  }; 

}
