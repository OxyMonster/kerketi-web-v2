import { Component, OnInit, Input } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-pay-bill-confirm-modal',
  templateUrl: './pay-bill-confirm-modal.component.html',
  styleUrls: ['./pay-bill-confirm-modal.component.scss', '../pay-bill-templates.component.scss']
})
export class PayBillConfirmModalComponent implements OnInit {

  @Input() selectedTemplate: any; 

  isPayed: boolean = false; 
  isPayErr: boolean = false; 
  otpCode: string;


  constructor(
    private _paymentService: PaymentsService,
    private _utileService: UtileService,
    private _trasnferFundService: TransferFundsService

  ) { }

  ngOnInit(): void {
    console.log(this.selectedTemplate);
    this.getOtpCode(); 
  }


  payBill() {

    const billPaySchema = {
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "otp": this.otpCode,
      "parameters": [
        {
            "key": "abonentCode",
            "value": this.selectedTemplate[0]['parameters'][2]['value']
        },
        {
            "key": "amount",
            "value": this.selectedTemplate[0]['amount']
        },
        {
            "key": "currency",
            "value": "GEL"
        },
    ],
      "serviceId": this.selectedTemplate[0]['serviceId'],
      "sessionId": this._utileService.getSessionId()
    }; 

    console.log(billPaySchema);  
    
    
      
      this._paymentService
          .payBill( billPaySchema )
          .subscribe ( data => {
            
            
              if ( data['isSuccess'] ) {
                
                this.isPayed = true; 
                console.log('ok');
            
              } else {
                
                this.isPayErr = true; 
                console.log('fail');
                
                
              }
            
          }, err => {
            
            console.log(err);
            
          });
  };

  getOtpCode() {

    const schema = {
      "amount": this.selectedTemplate[0]['amount'],
      "domainId": 2,
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "os": "IOS",
      "sessionId": this._utileService.getSessionId()
    };
console.log(schema);

    return this._trasnferFundService
               .getOtp(schema)
               .subscribe(data => {
                 console.log(data);
                 
      }, err => {
          console.log(err);
          
               })
  }; 



}

