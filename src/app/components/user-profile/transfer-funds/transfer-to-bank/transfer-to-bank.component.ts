import { Component, OnInit } from '@angular/core';
import { faCoins, faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { HomeService } from 'src/app/services/home.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-transfer-to-bank',
  templateUrl: './transfer-to-bank.component.html',
  styleUrls: ['./transfer-to-bank.component.scss']
})
export class TransferToBankComponent implements OnInit {

 
  faCoins = faCoins; 
  faPiggyBank = faPiggyBank; 

  isActive: boolean = false;
  isIbanErr: boolean = false; 
  
  clienIp: string; 
  iban: string = ''; 
  selectedAmount: number;  

  transferModelShchema: any; 
  
  constructor(
    private _transferFundService: TransferFundsService, 
    private utileService: UtileService,
    private _homeService: HomeService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.getClientIP();
    

  }

  toggle() {
    return this.isActive = !this.isActive
  }; 


  onibanSelect() {
    if ( this.iban.length === 22 ) {
        this.isIbanErr = false;
        this.toggle(); 

    } else {
      this.isIbanErr = true;
      
    }; 
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

  openModal(modalContent) {

    this.transferModelShchema = {

      "agentName": this.utileService.getMsidn(),
      "amount": this.selectedAmount,
      "creditor": "",
      "debtor": "",
      "description": "საბანკო ანგარიშზე გადარიცხვა",
      "dob": "2020-09-11T15:26:40.594Z",
      "fullName": `${this._homeService.userData[0]['firstName']} ${this._homeService.userData[0]['lastName']}`,
      "iban": this.iban,
      "initiator": "",
      "languageId": this.utileService.getUserLanguage(),
      "modified": "",
      "msisdn": this.utileService.getMsidn(),
      "otp": "2992",
      "pid": this._homeService.userData[0]['pid'],
      "sessionId": this.utileService.getSessionId(),
      "transIdKeParent": "",
      "transIdMy": "",
      "walletTypeId": 1
  };    

    
    this.modalService.open(modalContent,{ size: 'md' }); 

  }


}
