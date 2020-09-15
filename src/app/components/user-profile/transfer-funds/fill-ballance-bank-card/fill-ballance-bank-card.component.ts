import { Component, OnInit } from '@angular/core';
import { faCoins, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { FormRedirectService } from 'src/app/shared/services/form-redirect.service';

@Component({
  selector: 'app-fill-ballance-bank-card',
  templateUrl: './fill-ballance-bank-card.component.html',
  styleUrls: ['./fill-ballance-bank-card.component.scss']
})
export class FillBallanceBankCardComponent implements OnInit {

  faCoins = faCoins; 
  faEnvelopeOpenText = faEnvelopeOpenText; 

  isActive: boolean = true; 
  
  clienIp: string; 
  description: string = 'დანიშნულება (არასავალდებული)'; 
  selectedAmount: number;  
  
  constructor(
    private _transferFundService: TransferFundsService, 
    private utileService: UtileService,
    private _redirectService: FormRedirectService
  ) { }

  ngOnInit(): void {

    this.getClientIP();

  }

  toggle() {
    return this.isActive = !this.isActive
  }; 


  onDescriptionSelect() {
   
      this.toggle(); 
  }

  getClientIP() {
    return this._transferFundService
               .getClientIP()
               .subscribe( data => {
                 this.clienIp = data['ip']
                 
               }, err => {
                 console.log(err);
                 
               } )
                
  }; 

  onSubmit() {

    const paySchema = {
      "amount": this.selectedAmount,
      "clientIpAddr": this.clienIp, 
      "currency": "GEL",
      "description": 'საკუთარი ანგარიშის შევსება საბანკო ბარათით ',
      "domainId": 2,
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "rememberCardParams": false,
      "sessionId": this.utileService.getSessionId(),
      "tbcCommand": "Registration"
    }; 

    if ( this.selectedAmount > 0 ) {
      
      return this._transferFundService
                 .getTbcTransactionID(paySchema)
                 .subscribe( data => {
  
                  console.log( data );
                  
                  //  * * * Post to Eccomerce with transactionID * * * *
                  this._redirectService.post({'trans_id': data['data']}, this._redirectService.eCommerceURL)
      
    }); 
    } else {

      if ( this.selectedAmount <= 0 ) {
         console.log('wrong amount');
      }; 

    }
  
  
  }

}
