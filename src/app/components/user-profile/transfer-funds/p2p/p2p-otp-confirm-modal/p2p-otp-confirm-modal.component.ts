import { Component, OnInit, Input } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-p2p-otp-confirm-modal',
  templateUrl: './p2p-otp-confirm-modal.component.html',
  styleUrls: ['./p2p-otp-confirm-modal.component.scss']
})
export class P2pOtpConfirmModalComponent implements OnInit {

  @Input() userData: any; 

  otpCode: number; 
  isLoading: boolean = false; 
  isSuccess: boolean = false;


  constructor(
    private _utileService: UtileService,
    private _transferFundService: TransferFundsService,
    private _paymentsService: PaymentsService
  ) { }

  ngOnInit(): void {
    console.log(this.userData);
    
    this.getOtp(); 
    
  }
  
  getOtp() {
    const userInfo = {
      "amount": this.userData['amount'],
      "domainId": 2,
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "os": "IOS",
      "sessionId": this._utileService.getSessionId() 
    }
    this._transferFundService
        .getOtp(userInfo)
        .subscribe( data => {
  
          // console.log(data);
        }, err => {
          console.log(err);
        });
  }


  onSubmit(userData: any) {

    if ( this.otpCode ) {
      
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
                   this.isSuccess = true;
                  
                   this.isLoading = false;
                  //  add to templates
                   if ( this.userData['isFavourite'] ) {
    
                    const templateSchema = {
                      "template":{
                        "amount": this.userData['amount'],
                        "description":this.userData['description'],
                        "fromWallet":"GEL",
                        "name":this.userData['name'],
                        "transferTo":this.userData['transferTo']},
                        "languageId": this._utileService.getUserLanguage(),
                        "sessionId":this._utileService.getSessionId(),
                        "type":2,
                        "msisdn":this._utileService.getMsidn()
                      };  
  
                        console.log(templateSchema);
                        
  
                     return this._paymentsService
                                .addTemplates(templateSchema)
                                .subscribe( template => {
                                  console.log(template);
                                  this.isSuccess = true;
                                }, err => console.log(err) )
  
                   }
  
                 }, err => {
                    this.isLoading = false;   
                     console.log(err);
                   
                 })
  
    }; 
    }

}
