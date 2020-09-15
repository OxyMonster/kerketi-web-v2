import { Component, OnInit, Input } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';

@Component({
  selector: 'app-p2p-otp-confirm-modal',
  templateUrl: './p2p-otp-confirm-modal.component.html',
  styleUrls: ['./p2p-otp-confirm-modal.component.scss']
})
export class P2pOtpConfirmModalComponent implements OnInit {

  @Input() userData: any; 
  otpCode: number; 
  isLoading: boolean = false; 

  constructor(
    private _utileService: UtileService,
    private _transferFundService: TransferFundsService
  ) { }

  ngOnInit(): void {

    this.getOtp(); 
    
  }
  
  getOtp() {
    const userInfo = {
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "os": "ANDROID",
      "sessionId": this._utileService.getSessionId()
    }
    this._transferFundService
        .getOtp(userInfo)
        .subscribe( data => {
  
          console.log(data);
        }, err => {
          console.log(err);
        });
  }


  onSubmit(userData: any) {
    this.isLoading = true; 

    const transferSchema = {
      "amount": userData['amount'], 
      "description": 'p2p გადარიცხვა',
      "fromWallet":  'GEL',
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "otp": this.otpCode,
      "ptransId": "",
      "sessionId": this._utileService.getSessionId(),
      "transferTo": userData['transferTo']
    }; 

    console.log(transferSchema);
    

    return this._transferFundService
               .transferPersonToPerson(transferSchema)
               .subscribe( data => {
                 console.log(data);
                 this.isLoading = false;

               }, err => {
                  this.isLoading = false;   
                   console.log(err);
                 
               })

  }; 

}
