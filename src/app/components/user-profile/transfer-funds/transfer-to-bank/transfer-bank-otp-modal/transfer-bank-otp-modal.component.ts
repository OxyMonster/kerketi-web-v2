import { Component, OnInit, Input } from '@angular/core';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-transfer-bank-otp-modal',
  templateUrl: './transfer-bank-otp-modal.component.html',
  styleUrls: ['./transfer-bank-otp-modal.component.scss']
})
export class TransferBankOtpModalComponent implements OnInit {

  @Input() transferData: any; 

  otpCode: number; 
  isLoading: boolean = false; 
  isSuccess: boolean = false; 
  isPayed: boolean = false; 

  constructor(
    private transferFundsService: TransferFundsService,
    private _utileService: UtileService
  ) { }

  ngOnInit(): void {

    this.getOtp(); 
  }


  getOtp() {

    const schema  = {
      "amount": this.transferData['amount'],
      "domainId": 2,
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "os": "IOS",
      "sessionId": this._utileService.getSessionId()
    };  

    return this.transferFundsService
               .getOtp(schema)
               .subscribe( data => {
                 console.log(data);
                 
               }, err => {
                 console.log(err);
                 
               })
  }


  onSubmit() {
    this.isLoading = true; 
    this.transferData.otp = this.otpCode; 

    return this.transferFundsService
               .transferTobank(this.transferData)
               .subscribe(data => {
                 console.log(data);
                 
                this.isLoading = false; 
                this.isPayed = true; 
                data['isSuccess'] ? this.isSuccess = true : this.isSuccess = false;
               
                 
               }, err => {

                console.log(err);
                
               }); 
  }



}
