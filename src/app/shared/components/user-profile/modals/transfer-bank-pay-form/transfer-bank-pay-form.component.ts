import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';

@Component({
  selector: 'app-transfer-bank-pay-form',
  templateUrl: './transfer-bank-pay-form.component.html',
  styleUrls: ['./transfer-bank-pay-form.component.scss']
})
export class TransferBankPayFormComponent implements OnInit {

  @Input() bankData: any; 
  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>(); 


  sendMoneyForm: FormGroup; 

  isLoading: boolean = false; 
  isTimerActive: boolean = false; 
  isPayed: boolean = false; 
  isPayErr: boolean = false; 

  constructor(
    // private _transFundService: BankTransactionsService, 
    private fb: FormBuilder, 
    private utileService: UtileService,
    private _transFundService: TransferFundsService
  ) { 

    this.sendMoneyForm = this.fb.group({

      agentName: [ '', Validators.required ], 
      amount: ['', Validators.required ],
      description: ['', Validators.required], 
      fullName: ['', Validators.required], 
      otp: ['', Validators.required ]

    }); 

  }

  ngOnInit(): void {

  }



  transferToBank(bankForm: any) {

    const reqParams = {
    
      "agentName": bankForm.value['agentName'],
      "amount": bankForm.value['amount'],
      "description": bankForm.value['description'],
      "dob": "2020-06-17T13:54:50.489Z",
      "fullName": bankForm.value['fullName'],
      "iban": this.bankData['iban'],
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "otp": bankForm.value['otp'],
      "pid": this.bankData['pid'],
      "sessionId": this.utileService.getSessionId(),
      "transIdKeParent": "",
      "transIdMy": "",
      "walletTypeId": 1
      
    }; 



    this.isLoading = true;

    return this._transFundService
               .transferTobank(reqParams)
               .subscribe( data => {

                console.log(data);
                this.isPayed = true; 
                this.isLoading = false; 
               }, err => {

                console.log(err);
                this.isPayed = true; 
                this.isPayErr = true; 
                this.isLoading = false; 

                
               }); 
  }; 



  getOtp() {
    const userInfo = {
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "os": "ANDROID",
      "sessionId": this.utileService.getSessionId()
    }
    this.isTimerActive = true;
    this._transFundService
        .getOtp(userInfo)
        .subscribe( data => {

          // this.isError = false; 
          setTimeout(() => {

            this.isTimerActive = false; 

          }, 10000 );

          console.log(data);

        }, err => {
          console.log(err);
        });
  }


}
