import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-registered-card-templates',
  templateUrl: './registered-card-templates.component.html',
  styleUrls: ['./registered-card-templates.component.scss']
})
export class RegisteredCardTemplatesComponent implements OnInit {
  
  @Output() selectedTemplate: EventEmitter<any> = new EventEmitter<any>(); 
  
  allRegisteredCads: any[] = []; 

  constructor(
    private _transferFundsService: TransferFundsService,
    private _utileService: UtileService
  ) { }

  ngOnInit(): void {
    this.getRegisteredCards();
  }

  onChooseTemplate(template) {
    this.selectedTemplate.emit(template)
  }


  getRegisteredCards() {
    const schema = {
      "domainId": 2,
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId(),
      "username": this._utileService.getMsidn()
    }; 


    return this._transferFundsService
               .getRegisteredCards(schema)
               .subscribe( data => {

                this.allRegisteredCads = data['data']
                console.log(this.allRegisteredCads);
                
               }, err => console.log(err) )

  }

}
