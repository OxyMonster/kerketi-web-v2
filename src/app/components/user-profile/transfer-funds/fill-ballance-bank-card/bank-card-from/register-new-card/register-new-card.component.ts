import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { FormRedirectService } from 'src/app/shared/services/form-redirect.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { faBackward } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-register-new-card',
  templateUrl: './register-new-card.component.html',
  styleUrls: ['./register-new-card.component.scss']
})
export class RegisterNewCardComponent implements OnInit {

  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  @Output() goBack: EventEmitter<boolean> = new EventEmitter<boolean>(); 


  registerCardForm: FormGroup;
  confirmToken: string; 
  clientIP: string; 

  faBackward = faBackward;

  constructor(
    private fb: FormBuilder,
    private _utileService: UtileService,
    private _transferFundService: TransferFundsService,
    private _redirectService: FormRedirectService
  ) {

    this.registerCardForm = this.fb.group({
      registeredCardName: [ '', Validators.required ]
    })
   }
  
  ngOnInit(): void {
    this.getClientIP();
    this.getTbcConfirmationToken(); 
  }

  emitGoBack() {
    this.goBack.emit(true); 
  }; 

  getTbcConfirmationToken() {

    const schema = {
      "domainId": 2,
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId(),
      "username": this._utileService.getMsidn()
    
    }; 

    return  this._transferFundService
                .getTbcConfirmationToken(schema)
                .subscribe( data => {
                  this.confirmToken = data['data']
                  
                }, err => console.log(err) )
  }; 

  getClientIP() {
    return this._transferFundService
               .getClientIP()
               .subscribe(data => {
                  this.clientIP = data['ip']; 
                 
               }, err => console.log(err))
          
  }

  onSubmit(regisreCardFormValue) {

    const schema = {  
        "amount": 1,
        "clientIpAddr": this.clientIP,
        "confirmationToken": this.confirmToken,
        "currency": "GEL",
        "description": "",
        "domainId": 2,
        "languageId": this._utileService.getUserLanguage(),
        "msisdn": this._utileService.getMsidn(),
        "registeredCardName": this.registerCardForm.value['registeredCardName'],
        "sessionId": this._utileService.getSessionId(),
        "tbcCommand": "Registration"
    }
    
    console.log(schema);
    
    this._transferFundService
        .registerNewCard(schema)
        .subscribe(data => {
          console.log(data);
          const isRegisterNewCardActive = false;
          this._redirectService
              .post({'trans_id': data['data']}, this._redirectService.eCommerceURL)
          this.result.emit(isRegisterNewCardActive); 
          
        }, err => {
          console.log(err);
          
        })
    
  }
}
