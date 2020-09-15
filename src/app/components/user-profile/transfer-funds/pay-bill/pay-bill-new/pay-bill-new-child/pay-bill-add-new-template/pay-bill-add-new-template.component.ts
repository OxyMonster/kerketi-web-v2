import { Component, OnInit, Input } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { PaymentsService } from 'src/app/services/payments.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-pay-bill-add-new-template',
  templateUrl: './pay-bill-add-new-template.component.html',
  styleUrls: ['./pay-bill-add-new-template.component.scss']
})
export class PayBillAddNewTemplateComponent implements OnInit {

 
  @Input() billerData: any[] = []; 

  faSearch = faSearch;
  faTimes = faTimes; 
  
  isBillerSelected: boolean = false; 
  isLoading: boolean = false; 
  isErr: boolean = false; 
  isBillerDeptAcitve: boolean = false; 
  
  selectedBiller: any[] = []; 
  billerDebtData: any[ ]= []; 
  
  abonentCode: string; 
  serviceId: string; 

  billPayAmount: number; 

  isPayed: boolean = false; 
  isPayErr: boolean = false; 

  billerDept: number; 
  isBalanceEnoughErr: boolean = false; 

  selectedBillerServiceID: number; 

  constructor(
    private _paymentsService: PaymentsService, 
    private utileService: UtileService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    this.isBillerSelected = false; 
  
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



  addToTemplates() {


    const templatesData = {
      "template":
      
      {"name":this.selectedBiller[0]['title'],
       "parameters":
        [
          {"key":"amount","value":this.billPayAmount },
          {"key":"currency","value":"GEL" },
          {"key":"abonentCode","value":this.abonentCode },
          {"key":"currency","value":"GEL"}
        ],
          "serviceId":this.selectedBiller[0]['service']['id'] 
        },
          "languageId":this.utileService.getUserLanguage(),
          "sessionId":this.utileService.getSessionId(),
          "type":1,
          "msisdn":this.utileService.getMsidn()
        }; 

      return this._paymentsService
                  .addTemplates(templatesData)
                  .subscribe(data => {
  
                  console.log(data);
                  this._router.navigate(['/user-profile/transfer/pay-bill/pay']);

                  }, err => {
                    console.log(err);
                    
                  })
      }


}
