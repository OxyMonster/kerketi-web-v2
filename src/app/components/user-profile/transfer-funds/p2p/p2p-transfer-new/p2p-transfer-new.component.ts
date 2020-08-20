import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';

@Component({
  selector: 'app-p2p-transfer-new',
  templateUrl: './p2p-transfer-new.component.html',
  styleUrls: ['./p2p-transfer-new.component.scss']
})
export class P2pTransferNewComponent implements OnInit {
  transactionForm: FormGroup; 
  smsCode: string; 
  isError: boolean = false; 
  errorMsg: string; 
  isTimerActive: boolean = false; 
  isSent: boolean = false; 
  modalContent: any; 

  isLoading: boolean = false; 
  isSubmitted: boolean = false; 
  
  constructor(
    private fb: FormBuilder,
    private _transferFundsService: TransferFundsService,
    private utilsSerice: UtileService,
    private modalService: NgbModal
  ) {
    this.transactionForm = this.fb.group({
      transferTo: [ '', Validators.required ],
      amount: [ '', Validators.required ],
      currency: ['', ], 
      description: [ '', Validators.required ],
      otp: [ '', Validators.required ],
      receiverName: ['', Validators.required ]
    }); 
   }
  ngOnInit(): void {
  }; 

  get f() { return this.transactionForm.controls; };

  getOtp() {
    const userInfo = {
      "languageId": this.utilsSerice.getUserLanguage(),
      "msisdn": this.utilsSerice.getMsidn(),
      "os": "ANDROID",
      "sessionId": this.utilsSerice.getSessionId()
    }
    this.isTimerActive = true;
    this._transferFundsService
        .getOtp(userInfo)
        .subscribe( data => {
          this.isError = false; 
          setTimeout(() => {
            this.isTimerActive = false; 
          }, 10000);
          console.log(data);
        }, err => {
          console.log(err);
        });
  }


  onSubmit( form:any, modalContent: any ) {
    
    this.isSubmitted = true; 
    
    const transferSchema = {
      "amount": form.value['amount'],
      "description": form.value['description'],
      "fromWallet": form.value['currency'] === '' ? 'GEL' : form.value['currency'] ,
      "languageId": this.utilsSerice.getUserLanguage(),
      "msisdn": this.utilsSerice.getMsidn(),
      "otp": form.value['otp'],
      "ptransId": "",
      "sessionId": this.utilsSerice.getSessionId(),
      "transferTo": form.value['transferTo']
    }; 

    if ( this.transactionForm.valid ) {

      this.isLoading = true; 

      this._transferFundsService
          .transferPersonToPerson(transferSchema)
          .subscribe( data => {
            this.openModal(modalContent); 
            if (!data['isSuccess']) {
              this.isError = true; 
              this.isLoading = false; 
              this.errorMsg = data['errorMessage']; 
            } else {
              this._transferFundsService.savedCustomer = this.transactionForm.value; 
              this.openModal(modalContent);
              this.isLoading = false; 
              this.isError = false; 
              this.isSent = true; 
            }
            console.log(data);
            this.transactionForm.reset();
          }, err => console.log(err) )
      console.log(form.value);

    } else {

      return; 
    }
    
  }; 


  openModal(content: any) {
    //* * * Modal Options * * * * 
    this.modalService.open(content, { size: 'xl' });
  };


  getModalResult(isSent: boolean) {
    this.isSent = isSent;
    if ( isSent ) {
      this.modalService.dismissAll(); 
    }
  }; 



}
