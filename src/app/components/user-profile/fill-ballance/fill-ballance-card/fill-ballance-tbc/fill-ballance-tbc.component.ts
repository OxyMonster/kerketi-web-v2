import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import {  FormRedirectService } from "src/app/shared/services/form-redirect.service";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-fill-ballance-tbc',
  templateUrl: './fill-ballance-tbc.component.html',
  styleUrls: ['./fill-ballance-tbc.component.scss']
})
export class FillBallanceTbcComponent implements OnInit {

  bankForm: FormGroup; 

  clienIp: string; 
  isLoading: boolean = false; 
  isSubmitted: boolean = false; 

  constructor(
    private _transferFundService: TransferFundsService,
    private fb: FormBuilder,
    private utileService: UtileService,
    private _redirectService: FormRedirectService,
    private _modalService: NgbModal
  ) {

   this.bankForm =  this.fb.group({
    amount: [ '', Validators.required ],
    description: [ '', Validators.required ]

  }); 
    console.log( this.getClientIP());
    
   }

  ngOnInit(): void {

    this.getClientIP();
  }

  get f() { return this.bankForm.controls; }; 
  

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
    this.isLoading = true;   
    this.isSubmitted = true; 

    const paySchema = {
      "amount": 1,
      "clientIpAddr": this.clienIp,
      "currency": "GEL",
      "description": this.bankForm.value['description'],
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
                
                //  * * * Post to Eccomerce with transactionID * * * *
                this._redirectService.post({'trans_id': data['data']}, this._redirectService.eCommerceURL)
                this.isLoading = false;
                this._modalService.dismissAll(); 


    
  }); 
  
  
  }


}
