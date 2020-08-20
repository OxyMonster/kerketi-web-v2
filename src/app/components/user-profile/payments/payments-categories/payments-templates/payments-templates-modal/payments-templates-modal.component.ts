import { Component, OnInit, Input } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-payments-templates-modal',
  templateUrl: './payments-templates-modal.component.html',
  styleUrls: ['./payments-templates-modal.component.scss']
})
export class PaymentsTemplatesModalComponent implements OnInit {

  @Input() templatesData: any; 
  @Input() serviceId: string; 

  isPayed: boolean = false; 
  isPayErr: boolean = false;
  
  // * * * Form * * *
 
  amount: number; 
  abonentCode: number; 

  constructor(
    private paymentServie: PaymentsService,
    private utileService: UtileService
  ) { }

  ngOnInit(): void {
    
    console.log(this.serviceId);
    
  }


  payBill(serviceId: number) {

    this.isPayed = true; 


    const billPaySchema = {
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "parameters": [
        {
            "key": "abonentCode",
            "value": this.abonentCode ? this.abonentCode : this.templatesData[0]['parameters'][2]['value']
        },
        {
            "key": "amount",
            "value": this.amount ? this.amount : this.templatesData[0]['parameters'][0]['value'] === null ? 0
            : this.templatesData[0]['parameters'][0]['value']
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
      "serviceId": serviceId,
      "sessionId": this.utileService.getSessionId()
    }; 

    console.log(billPaySchema);
    
    
      
      this.paymentServie
          .payBill( billPaySchema )
          .subscribe ( data => {
            
            
              if ( data['isSuccess'] ) {
                
                this.isPayErr = false; 
                console.log(data);
                console.log('warmatebulia ;)))');
            
              } else {
                this.isPayErr = true; 
                console.log(data);
                console.log("Warumatebelia :(((");
                
              }
            
          }, err => {
            
            console.log(err);
            
          });
    
  }; 

}
