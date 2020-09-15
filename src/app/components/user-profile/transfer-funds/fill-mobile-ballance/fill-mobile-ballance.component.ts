import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtileService } from 'src/app/shared/services/utile.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { faWallet, faMobile, faCoins, faChevronDown, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from 'src/app/services/home.service';
 
@Component({
  selector: 'app-fill-mobile-ballance',
  templateUrl: './fill-mobile-ballance.component.html',
  styleUrls: ['./fill-mobile-ballance.component.scss']
})
export class FillMobileBallanceComponent implements OnInit {


  // * * * Icons * * * 
  faWallet = faWallet; 
  faMobile = faMobile; 
  faCoins = faCoins; 
  faChevronDown = faChevronDown; 
  faPlusCircle = faPlus; 
  faTrashAlt = faTrashAlt;

  selectedBox: string = 'from';
  selectedCategory: string = 'from'; 
  
  allTemplates: any[]= []; 
  allWallets: any[] = []; 
  
  isNewPaySelected: boolean = false; 
  isTemplateSelected: boolean = false; 
  isWalletSelected: boolean = false; 
  isAmountErr: boolean = false; 
  isNewTemplate: boolean = false;

  selectedWallet: any[] = []; 
  selectedTemplate: any[] = []; 
  amount: number;
  
  fillMobileSchema: any; 

  
  constructor(
    private _modalService: NgbModal,
    private _utileService: UtileService, 
    private _paymentService: PaymentsService,
    private _homeService: HomeService
  ) { }

  ngOnInit(): void {

    this.getWallets(); 
    this.getTemplates(); 
    console.log(this.selectedTemplate);
    
  }


  getResult(event: any) {
    this.isNewPaySelected = false;
    this.onTemplateSelect(event, true); 
    console.log(event);
    

  }; 

  onTemplateSelect(template, isNew: boolean) {
    console.log(isNew);
    
    isNew ? this.isNewTemplate = true : this.isNewTemplate = false;
    this.selectedTemplate = [template];
    this.selectedBox = 'amount';
    this.selectedCategory = 'amount';
    this.isTemplateSelected = true; 
    
    
}; 

   
  onWalletSelect(wallet) {
    this.isWalletSelected = true; 
    this.selectedWallet = [wallet]; 
    this.selectedBox = 'to'; 
    this.selectedCategory = 'to'; 
  }; 

  onBoxSelect(boxType: string, categoryType ?: string) {
    this.selectedBox = boxType; 
    this.selectedCategory = categoryType; 
    this.isNewPaySelected = false; 
  }; 


    showNewPayment() {
      this.isNewPaySelected = true; 
    }; 


  getWallets() {
    const userInfoSchema = {
      languageId: this._utileService.getUserLanguage(),
      msisdn: this._utileService.getMsidn(),
      sessionId: localStorage.getItem('sessionId')
    }; 

    return  this._homeService
                .getUserInfo(userInfoSchema)
                .subscribe( data => {
                  
                  this.allWallets = data['data']['wallets']
                  console.log(this.allWallets);
                  
                  
                }, err => {
                  console.log(err);
                  
                } )
  }

  

  getTemplates() {

    const getTempatesData = {
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId(),
      "type": 3
    }; 

    return this._paymentService
               .getTemplates(getTempatesData)
               .subscribe( data => {

               
                this.allTemplates = data['data']; 
                this.allTemplates.map( item => item.isActive = false ); 

                console.log(this.allTemplates);
                
                
               }, err => {

                console.log(err);
                
               });

  };

  deleteTemplate(template: any, index: number) {
    const schema = {
      "domainId": 0,
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId(),
      "templateId": template['id']
    }; 

    this._paymentService
        .deleteTemplates(schema)
        .subscribe(data => {
          this.allTemplates.splice(index, 1); 
          console.log(data);
          
        }, err => {
          console.log(err);
          
        })
  }

  openModal(modalContent: any) {
    console.log(this.selectedTemplate);
    
    if ( this.amount && this.amount > 0 && this.selectedTemplate.length > 0 && this.selectedWallet[0]['walletTypeName']) {
      
        this.fillMobileSchema = {
          "domainId": 0,
          "languageId": this._utileService.getUserLanguage(),
          "msisdn": this._utileService.getMsidn(),
          "parameters": [
            {
              "key": "amount",
              "value": this.amount
            },
            { 
              "key": "abonentCode",
              "value":  this.isNewTemplate ? this.selectedTemplate[0]['abonentCode'] : this.selectedTemplate[0]['parameters'][2]['value']
            },
            { 
              "key": "currency",
              "value":  'GEL'
            },
          ],
          "serviceId": this.selectedTemplate[0]['serviceId'],
          "sessionId": this._utileService.getSessionId()
        }; 
        console.log(this.fillMobileSchema);
        
      this._modalService.open(modalContent, { size: 'md' }); 

    } else {

      if ( this.selectedTemplate.length === 0 ) {
            this.selectedBox = 'to'; 
            this.selectedCategory = 'to'; 
      }; 

      if ( this.selectedWallet.length === 0 ) {
            this.selectedBox = 'from'; 
            this.selectedCategory = 'from'
      };
    }   
  }

}
