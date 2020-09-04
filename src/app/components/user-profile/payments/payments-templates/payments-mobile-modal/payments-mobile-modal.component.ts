import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payments-mobile-modal',
  templateUrl: './payments-mobile-modal.component.html',
  styleUrls: ['./payments-mobile-modal.component.scss']
})
export class PaymentsMobileModalComponent implements OnInit {

  @Input() billersList: any[] = []; 

  selectedCatList: any[] = []; 
  
  isSelected: boolean = false; 
  isProviderSelected: boolean = false; 
  isPayed: boolean = false; 
  isErr: boolean = false; 
  isSubmitted: boolean = false; 

  mobileForm: FormGroup; 

  // abonentCode: string; 
  // billPayAmount: number; 
  serviceId: string; 

  imgUrl: string; 
  userAvailableBalance: number; 

  faStar = faStar; 



  constructor(
    private _paymentService: PaymentsService,
    private utileService: UtileService,
    private homeService: HomeService,
    private fb: FormBuilder
  ) { 

    this.mobileForm = this.fb.group({
      abonentCode: [ '', Validators.required ],
      billPayAmount: [ '', Validators.required ], 

    })

  }

  ngOnInit(): void {

      this.getUserBalance(); 
  }; 

  get f() { return this.mobileForm.controls; }; 


  selectBiller(item) {

    this.selectedCatList = item['children']; 
    this.isSelected = true; 
  }; 

  selectProvider(item) {

    this.serviceId = item['service']['id']; 
    this.isProviderSelected = true; 
  } 


  payBill() {

    this.isSubmitted = true; 


    const billPaySchema = {
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "parameters": [
        {
            "key": "abonentCode",
            "value":  this.mobileForm.value['abonentCode']
        },
        {
            "key": "amount",
            "value": this.mobileForm.value['billPayAmount']
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
      "serviceId": this.serviceId,
      "sessionId": this.utileService.getSessionId()
    }; 

    if ( this.mobileForm.valid ) {
    if ( this.userAvailableBalance >= this.mobileForm.value['billPayAmount'] ) {


    
    
        return this._paymentService
                   .payBill(billPaySchema)
                   .subscribe( data => {
    
                    console.log(data);
                    if ( data['isSuccess'] ) {
    
                      this.isPayed = true; 
    
                    }
                    
                   }, err => {
                     console.log(err);
                     
                   })
      } else {

        this.isErr; 
      }
    } else {
      
      //  Form is  empty; 
      return; 
    }; 


    }; 



  getUserBalance() {

    const userInfo = {
      languageId: this.utileService.getUserLanguage(),
      msisdn: this.utileService.getMsidn(),
      sessionId: localStorage.getItem('sessionId')
    }; 

    return this.homeService
               .getUserInfo(userInfo)
               .subscribe( data => {

                if (data['isSuccess']) {
                  
                  this.userAvailableBalance = data['data']['wallets'][0]['balanceAvailable']; 
                  console.log(this.userAvailableBalance);
                  
                } 
                
               } )
  };


  addToTemplates() {

    const templatesData = {
      "template":
      
      {"name":this.selectedCatList[0]['title'],
       "parameters":
        [
          {"key":"amount","value":this.mobileForm.value['abonentCode'] },
          {"key":"currency","value":"GEL" },
          {"key":"abonentCode","value": this.mobileForm.value['abonentCode'] },
          {"key":"currency","value":"GEL"}],
          "serviceId":this.serviceId },
          "languageId":this.utileService.getUserLanguage(),
          "sessionId":this.utileService.getSessionId(),
          "type":1,
          "msisdn":this.utileService.getMsidn()}

      return this._paymentService
                  .addTemplates(templatesData)
                  .subscribe(data => {
  
                  console.log(data);
                  
                  }, err => {
                    console.log(err);
                    
                  })
      }


}
