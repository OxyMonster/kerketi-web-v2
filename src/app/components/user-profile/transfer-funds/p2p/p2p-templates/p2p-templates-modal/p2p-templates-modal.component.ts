import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';

@Component({
  selector: 'app-p2p-templates-modal',
  templateUrl: './p2p-templates-modal.component.html',
  styleUrls: ['./p2p-templates-modal.component.scss']
})
export class P2pTemplatesModalComponent implements OnInit {

  @Input() selectedTemplate: any; 

  // * * * Form * * * 
  amount: number; 
  description: string; 
  transferTo: string; 

  // * * / * * 

  personForm: FormGroup; 

  isSent: boolean = false; 
  isTimerActive: boolean = false; 
  isError: boolean = false; 
  isLoading: boolean = false; 
  isSubmitted: boolean = false; 


  constructor(
    private utilsSerice: UtileService,
    private transferFundsService: TransferFundsService,
    private fb: FormBuilder
  ) {

    this.personForm = this.fb.group({

      transferTo: ['' ] ,
      amount: ['', Validators.required ], 
      description: ['', Validators.required ],
      otp: ['', Validators.required ],

    })
   }

  ngOnInit() {

    console.log(this.selectedTemplate);
    
  };

  get f() { return this.personForm.controls; }; 

  getOtp() {
    const userInfo = {
      "languageId": this.utilsSerice.getUserLanguage(),
      "msisdn": this.utilsSerice.getMsidn(),
      "os": "ANDROID",
      "sessionId": this.utilsSerice.getSessionId()
    }
    this.isTimerActive = true;
    this.transferFundsService
        .getOtp(userInfo)
        .subscribe( data => {
          // this.isError = false; 
          setTimeout(() => {
            this.isTimerActive = false; 
          }, 10000);
          console.log(data);
        }, err => {
          console.log(err);
        });
  }

  onSubmit( form:any ) {
    
    this.isSubmitted = true; 
    
    const transferSchema = {
      "amount": form.value['amount'],
      "description": form.value['description'],
      "fromWallet": "GEL",
      "languageId": this.utilsSerice.getUserLanguage(),
      "msisdn": this.utilsSerice.getMsidn(),
      "otp": form.value['otp'],
      "ptransId": "",
      "sessionId": this.utilsSerice.getSessionId(),
      "transferTo": form.value['transferTo'] || this.selectedTemplate.transferTo
    }; 

    if ( this.personForm.invalid ) {

      return; 
    } else { 

      this.isLoading = true; 

      this.transferFundsService
          .transferPersonToPerson(transferSchema)
          .subscribe( data => {
            console.log(data);
            this.isSent = true; 
            this.isLoading = false; 
  
            if (!data['isSuccess']) {
              this.isError = true; 
            } else {
              this.isError = false; 
            }
            
          }, err => {
            this.isSent = true; 
            this.isError = true; 
            this.isLoading = false; 
            console.log(err)
  
          })
      console.log(form.value);
    }; 

    }; 



}
