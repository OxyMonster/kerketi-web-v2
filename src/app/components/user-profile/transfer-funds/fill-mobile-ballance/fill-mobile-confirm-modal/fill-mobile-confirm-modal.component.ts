import { Component, OnInit, Input } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { PaymentsService } from 'src/app/services/payments.service';
 
@Component({
  selector: 'app-fill-mobile-confirm-modal',
  templateUrl: './fill-mobile-confirm-modal.component.html',
  styleUrls: ['./fill-mobile-confirm-modal.component.scss']
})
export class FillMobileConfirmModalComponent implements OnInit {

 
  @Input() selectedAbonent: any; 
  @Input() isFavourite: boolean = false; 

  isLoading: boolean = false; 
  isPayed: boolean = false; 

  constructor(
    private _paymentsService: PaymentsService,
    private _utileService: UtileService
  ) { }

  ngOnInit(): void {
      
      console.log(this.selectedAbonent);
      console.log(this.isFavourite);
      
      
  }

  onSubmit() {
    this.isLoading = true;     

    return this._paymentsService
               .payBill(this.selectedAbonent)
               .subscribe( data => {
                 console.log(data);
                 this.isLoading = false;

                 if ( this.isFavourite ) {

                  const schema = {
                    "template":
                    
                    {"name":this.selectedAbonent['parameters'][1]['value'],
                     "parameters":
                      [
                        {"key":"amount","value": this.selectedAbonent['parameters'][0]['value'] },
                        {"key":"currency","value":"GEL" },
                        {"key":"abonentCode","value":this.selectedAbonent['msisdn'] },
                        {"key":"currency","value":"GEL"}
                      ],
                        "serviceId":this.selectedAbonent['serviceId'] 
                      },
                        "languageId":this._utileService.getUserLanguage(),
                        "sessionId":this._utileService.getSessionId(),
                        "type":1,
                        "msisdn":this._utileService.getMsidn()
                      }; 

                      console.log(schema);
                      

                   return this._paymentsService
                              .addTemplates(schema)
                              .subscribe( template => {
                                console.log(template);
                                
                              }, err => console.log(err) )
                 }
                 
                 data['isSuccess'] ? this.isPayed = true : this.isPayed = false;

               }, err => {
                  this.isLoading = false;   
                   console.log(err);
                 
               })

  }; 

}
