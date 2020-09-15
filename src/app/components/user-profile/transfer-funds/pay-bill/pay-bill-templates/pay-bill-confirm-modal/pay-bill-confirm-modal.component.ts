import { Component, OnInit, Input } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
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

  constructor(
    private _paymentService: PaymentsService,
    private _utileService: UtileService

  ) { }

  ngOnInit(): void {
    console.log(this.selectedTemplate);
    
  }


  payBill() {


    const billPaySchema = {
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
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
        {
            "key": "agentPaymentId",
            "value": "1000000001"
        },
        {
            "key": "businessDayId",
            "value": "1"
        },
        {
            "key": "paymentChannel",
            "value": "MFE"
        },
        {
            "key": "paymentPoint",
            "value": "MFE"
        },
        {
            "key": "srcBankCode",
            "value": "MFE"
        },
        {
            "key": "srcBankAccountNumber",
            "value": "MFEAccount"
        },
        {
            "key": "dstBankCode",
            "value": "UCC"
        },
        {
            "key": "dstBankAccountNumber",
            "value": "uccAccount"
        }
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
        }

}
