import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FormRedirectService } from 'src/app/shared/services/form-redirect.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-fill-ballance-payge',
  templateUrl: './fill-ballance-payge.component.html',
  styleUrls: ['./fill-ballance-payge.component.scss']
})
export class FillBallancePaygeComponent implements OnInit {

  bankForm: FormGroup; 
  isChecked: boolean = false; 
  isLoading: boolean = false; 
  isSubmitted: boolean = false; 
 
  payParameters: any; 
  payURL: string; 


  constructor(
    private fb: FormBuilder,
    private _utileService: UtileService,
    private _transferFundService: TransferFundsService,
    private _redirectService: FormRedirectService,
    private _modalService: NgbModal
  ) { 

    this.bankForm = this.fb.group({

      amount: [ '', Validators.required ], 
      description: [ '', Validators.required ]

    })
  }

  ngOnInit(): void {
  }


  get f() { return this.bankForm.controls; }; 
 
  getPayInfo(bankForm) {


    this.isSubmitted = true; 


    const payData = {
      "amount": bankForm.value['amount'],
      "currency": "GEL",
      "description": bankForm.value['description'],
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId()
    
    }; 


    if ( this.bankForm.invalid ) { 

      return; 

    } else { 

      this.isLoading = true; 

      return this._transferFundService    
                 .getPayParamenters(payData)
                 .subscribe( data => {
  
                  console.log(data);
                  this.isLoading = false; 
                  this.isChecked = true; 
  
                  //  * * * Parse data * * * 
                this.payParameters = data['data']; 
                this.payURL = data['data']['url']; 
  
                delete this.payParameters.url; 
                  
                  
                 }, err => {
  
                  console.log(err);
                  
                 }); 

    }


  }; 


  sendToPay() {


    const form_data = new FormData();

    for ( const key in this.payParameters ) {
      form_data.append(key, this.payParameters[key]);      
      
    }; 

    return this._transferFundService
               .sendToPay(form_data)
               .subscribe( data => {

                console.log(data);
                this._redirectService.post(this.payParameters, this.payURL)
                this._modalService.dismissAll(); 
                
                                
               }, err => {

                console.log(err);
                              
               })
    
  }


}
