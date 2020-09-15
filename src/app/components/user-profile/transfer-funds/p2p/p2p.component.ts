import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtileService } from 'src/app/shared/services/utile.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { faWallet, faUserCircle, faCoins, faChevronDown, faPlus } from '@fortawesome/free-solid-svg-icons';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-p2p',
  templateUrl: './p2p.component.html',
  styleUrls: ['./p2p.component.scss']
})
export class P2pComponent implements OnInit {
  
  // * * * Icons * * * 
  faWallet = faWallet; 
  faUser = faUserCircle; 
  faCoins = faCoins; 
  faChevronDown = faChevronDown; 
  faPlusCircle = faPlus; 

  selectedBox: string = 'from';
  selectedCategory: string = 'from'; 
  
  allTemplates: any[]= []; 
  allWallets: any[] = []; 
  
  isNewPaySelected: boolean = false; 
  isTemplateSelected: boolean = false; 
  isWalletSelected: boolean = false; 
  isAmountErr: boolean = false; 

  selectedWallet: any[] = []; 
  selectedTemplate: any[] = []; 
  amount: number;
  
  finalUserData: any; 

  
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
    this.onTemplateSelect(event); 

  }; 
   

  onBoxSelect(boxType: string, categoryType ?: string) {
    this.selectedBox = boxType; 
    this.selectedCategory = categoryType; 
    this.isNewPaySelected = false;
    
    switch (boxType) {
      case 'from' :
        console.log('from');
        break;
      case 'to':
        // this.getTemplates(); 
        break;
      case 'amount':
        console.log('amount');
        break;
    }

  }; 

  onTemplateSelect(template) {
    this.isTemplateSelected = true; 
    this.selectedTemplate = [template];
    this.selectedBox = 'amount';
    this.selectedCategory = 'amount';

    console.log('hereee');
    
  }; 

  onWalletSelect(wallet) {
    this.isWalletSelected = true; 
    this.selectedWallet = [wallet]; 
    this.selectedBox = 'to'; 
    this.selectedCategory = 'to'; 
  }


  showNewPayment() {
    this.isNewPaySelected = true; 
  }


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
      "type": 2
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

  openModal(modalContent: any,userData: any) {

    if ( this.amount && this.amount > 0 && this.selectedTemplate.length > 0 && this.selectedWallet[0]['walletTypeName']) {
      
        this.finalUserData = {
          "amount": this.amount, 
          "description": 'p2p გადარიცხვა',
          "fromWallet":  this.selectedWallet[0]['walletTypeName'],
          "languageId": this._utileService.getUserLanguage(),
          "msisdn": this._utileService.getMsidn(),
          "otp": userData['otp'],
          "ptransId": "",
          "sessionId": this._utileService.getSessionId(),
          "transferTo": userData['transferTo']
        }; 
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
