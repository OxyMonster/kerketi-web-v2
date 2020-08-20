import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';

@Component({
  selector: 'app-transfer-to-bank',
  templateUrl: './transfer-to-bank.component.html',
  styleUrls: ['./transfer-to-bank.component.scss']
})
export class TransferToBankComponent implements OnInit {

  bankType: string; 

  bankForm: FormGroup; 
  isLoading: boolean = false; 
  isSendMoneyActive: boolean = false; 
  isSubmitted: boolean = false; 

  constructor(
    private _transFundService: TransferFundsService,
    private _utileSerivce: UtileService,
    private fb: FormBuilder
  ) { 

    this.bankForm = this.fb.group({
      iban: [ '', Validators.required ], 
      pid: [ '', Validators.required ]
    })
    
  }

  ngOnInit(): void {

  }; 


  get f() { return this.bankForm.controls; }; 

  getBankInfo(bankForm) {

    this.isSubmitted = true; 
    
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1; //months from 1-12
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    const dateNow = year + "-" + month + "-" + day;


    const bankInfo = {

        "dob": '2020-06-17T13:54:50.489Z',
        "agentName": this._utileSerivce.getMsidn(),
        "iban": bankForm.value['iban'],
        "languageId": this._utileSerivce.getUserLanguage(),
        "pid": bankForm.value['pid'],
        "sessionId": this._utileSerivce.getSessionId()
      
    }; 

    console.log(bankInfo);
    
    if ( this.bankForm.invalid ) {

      return; 

    } else {
      this.isLoading = true; 

      return  this._transFundService
                  .getBankInfo(bankInfo)
                  .subscribe( data => {

                  this.isLoading = false; 
  
                  if ( data['isSuccess'] ) {
  
                    this.isSendMoneyActive = true; 
                    this.bankType = data['data']['Value'][1]['Value']; 
                    console.log(this.bankType);
                    
                  }
  
  
  
                  }, err => {
  
                    this.isLoading = false; 
                    console.log(err);
                    
                  }); 

}
  }; 


  getResult(event: boolean) {
   
    this.isSendMoneyActive = event; 
  }


}
