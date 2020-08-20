import { Component, OnInit, Input } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from 'src/app/services/home.service';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-payments-billers-modal',
  templateUrl: './payments-billers-modal.component.html',
  styleUrls: ['./payments-billers-modal.component.scss']
})
export class PaymentsBillersModalComponent implements OnInit {

  @Input() billerData: any[] = []; 
  
  isBillerSelected: boolean = false; 
  isLoading: boolean = false; 
  isPayLoading = false; 
  isErr: boolean = false; 
  isBillerDeptAcitve: boolean = false; 
  
  selectedBiller: any[] = []; 
  billerDebtData: any[ ]= []; 
  
  abonentCode: string; 
  serviceId: string; 

  billPayAmount: number; 

  isPayed: boolean = false; 
  isPayErr: boolean = false; 

  userAvailableBalance: number; 
  billerDept: number; 
  isBalanceEnoughErr: boolean = false; 

  selectedBillerServiceID: number; 

  isAddedToTemplates: boolean = false; 
  isTemplate: boolean = false; 


  faStar = faStar; 

  constructor(
    private _paymentsService: PaymentsService, 
    private utileService: UtileService,
    private _homeService: HomeService,
    ) { }

  ngOnInit(): void {
    this.isBillerSelected = false; 
    this.getUserBalance(); 
  }

  selectBiller(biller: any) {
    this.isBillerSelected = true; 
    
    this.selectedBiller = [biller]; 
    console.log(this.selectedBiller[0]["service"]["id"]);
    
  }; 

  getDept(biller: any) {
   
    this.serviceId = biller['service']['id']; 
    this.isLoading = true; 
    this.isErr = false; 

    const getDeptParameter = {
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "parameters": [
        {
          "key": 'abonentCode',
          "value": this.abonentCode
        }
      ],
      "serviceID": this.serviceId,
      "sessionId": this.utileService.getSessionId()
    };

    this._paymentsService
        .getDebt(getDeptParameter)
        .subscribe( data => {
          console.log(data);

          if ( data['isSuccess'] ) {
            this.isLoading = false;
            this.isErr = false;  
            this.isBillerDeptAcitve = true; 
            this.billerDebtData = data['data']['keyValueTexts']; 
            console.log(this.billerDebtData);
            this.billerDept = data['data']['keyValueTexts'][0]['value']; 
            
          } else {

            this.isLoading = false; 
            this.isErr = true; 
            this.isBillerDeptAcitve = false; 
          }
          
        }, err => console.log(err))
  }; 


  payBill() {


    const billPaySchema = {
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "parameters": [
        {
            "key": "abonentCode",
            "value": this.abonentCode
        },
        {
            "key": "amount",
            "value": this.billPayAmount
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

    console.log(billPaySchema);
    
    this.isPayLoading = true; 

    if ( this.userAvailableBalance >= this.billerDept && this.userAvailableBalance >= this.billPayAmount ) {
      
      this._paymentsService
          .payBill( billPaySchema )
          .subscribe ( data => {
                      this.isPayLoading = false; 
              if ( data['isSuccess'] ) {
  
                console.log(data);
                console.log(' ;)))');
                this.isPayed = true; 
                this.isPayErr = false; 
                
              } else {
                console.log(data);
                console.log(" :(((");
                
                this.isPayed = true;
                this.isPayErr = true; 
  
                
                
              }
            
          }, err => {
            this.isPayLoading = false; 
            console.log(err);
            
          });

    } else {
      console.log('arasakmarisi tanxa');
      this.isPayLoading = false; 
      this.isBalanceEnoughErr = true; 
    }

    
  }; 



  getUserBalance() {

    const userInfo = {
      languageId: this.utileService.getUserLanguage(),
      msisdn: this.utileService.getMsidn(),
      sessionId: localStorage.getItem('sessionId')
    }; 

    return this._homeService
               .getUserInfo(userInfo)
               .subscribe( data => {

                if (data['isSuccess']) {
                  
                  this.userAvailableBalance = data['data']['wallets'][0]['balanceAvailable']; 
                  console.log(this.userAvailableBalance);
                  
                } 
                
               } )
  };


  addToTemplates() {

    this.isAddedToTemplates = true; 

    const templatesData = {
      "template":
      
      {"name":this.selectedBiller[0]['title'],
       "parameters":
        [
          {"key":"amount","value":this.billPayAmount },
          {"key":"currency","value":"GEL" },
          {"key":"abonentCode","value":this.abonentCode },
          {"key":"currency","value":"GEL"}],
          "serviceId":this.selectedBiller[0]['service']['id'] },
          "languageId":this.utileService.getUserLanguage(),
          "sessionId":this.utileService.getSessionId(),
          "type":1,
          "msisdn":this.utileService.getMsidn()}

      return this._paymentsService
                  .addTemplates(templatesData)
                  .subscribe(data => {
  
                  console.log(data);
                  
                  }, err => {
                    console.log(err);
                    
                  })
      }

}
