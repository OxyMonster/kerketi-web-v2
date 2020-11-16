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
  isLoading: boolean = false;

  isActive: boolean = true; 
  selectedBoxType: string = 'from'; 
  
  clienIp: string; 
  description: string = ''; 
  selectedAmount: number;  

  selectedTemplate: any; 
  confirmToken: string;

  
  constructor(
    private _transferFundService: TransferFundsService, 
    private utileService: UtileService,
    private _redirectService: FormRedirectService
  ) { }

  ngOnInit(): void {

    this.getClientIP();

  }

  getResult(event) {
    this.selectedBoxType = event; 

  };

  getSelectedTemaplte(e) {
    this.selectedTemplate = e; 

    console.log(this.selectedTemplate);
    
  };

  toggle(boxType) {
    this.selectedBoxType = boxType;
    console.log(boxType);
    this.selectedBoxType; 
     
  }; 


  onDescriptionSelect() {
    
      this.selectedBoxType = 'pay';
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

  getTbcConfirmationToken() {

    const schema = {
      "domainId": 1,
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "sessionId": this.utileService.getSessionId(),
      "username": ""
    
    }; 

    return  this._transferFundService
                .getTbcConfirmationToken(schema)
                .subscribe( data => {
                  this.confirmToken = data['data']
                  
                }, err => console.log(err) )
  };

  onSubmit() {

    this.isLoading = true;

    if ( this.selectedTemplate === 'გადახდა ბარათის დამატების გარეშე' ) {
      console.log('Pay without template');
      
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
        
      return this._transferFundService
                  .getTbcTransactionID(paySchema)
                  .subscribe( data => {
  
                  console.log( data );
                  this.isLoading = false;
                  //  * * * Post to Eccomerce with transactionID * * * *
                  this._redirectService
                      .post({'trans_id': data['data']}, this._redirectService.eCommerceURL)
        }, err => {
          console.log(err);
          this.isLoading = false;

        }); 
  
    
    } else {
      console.log("Pay with Template");
      this.getTbcConfirmationToken(); 

      const paySchema = {
        "amount": this.selectedAmount,
        "clientIpAddr": this.clienIp,
        "confirmationToken": this.confirmToken,
        "currency": "GEL",
        "description": "",
        "domainId": 2,
        "languageId": this.utileService.getUserLanguage(),
        "msisdn": this.utileService.getMsidn(),
        "registeredCardId": this.selectedTemplate['cardId'],
        "registeredCardName": this.selectedTemplate['cardName'],
        "sessionId": this.utileService.getSessionId(),
        "tbcCommand": "Registration"
      
      }; 

      return this._transferFundService
                 .fillBallanceWithRegisteredCard(paySchema)
                 .subscribe(data => {
                   console.log(data);
                   this.isLoading = false;
                   
                 }, err => {
                   console.log(err);
                   this.isLoading = false;
                   
                 })
    }
  
  }

}
