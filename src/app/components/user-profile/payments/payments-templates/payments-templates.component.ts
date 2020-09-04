import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments-templates',
  templateUrl: './payments-templates.component.html',
  styleUrls: ['./payments-templates.component.scss']
})
export class PaymentsTemplatesComponent implements OnInit {
  
  templatesData: any[] = []; 
  mobileBillersList: any[] = []
  selectedTemplate: any[] = []; 
  mobileModalTitle: string;

  constructor(
    private _pamentServcie: PaymentsService,
    private _utileService: UtileService,
    private _modalService: NgbModal,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getTemplates(); 
    this.getBillers();
  }


  getTemplates() {

    const getTempatesSchema = {
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId(),
      "type": 1
    }; 

    return this._pamentServcie
               .getTemplates(getTempatesSchema)
               .subscribe( data => {
                
                 this.templatesData = data['data']; 
                
                  
                // * * * Get Dept for each tempalte * * * 
                this.templatesData.map( item => {

                  this.getDebt(item)
                      .subscribe( data => {
                        item.deptData = data['data']['keyValueTexts']

                        return data
                      }, err => {
                        console.log(err);
                        
                      } ); 
                }) 
                   
                console.log(this.templatesData);

               }, err => {

                console.log(err);
                
               });

  };

  
  getDebt( selectedTemplate: any ) {
    const getDeptSchema = {
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "parameters": [
        {
          "key": 'abonentCode',
          "value": selectedTemplate.parameters[2]['value']
        }
      ],
      "serviceID": selectedTemplate.serviceId,
      "sessionId": this._utileService.getSessionId()
    };

      return this._pamentServcie
                 .getDebt(getDeptSchema)
      

  };


  routeToBillers() {

    this._router.navigate(['/user-profile/payments/billers']);
  };



  openModal(modalContent: any, templateData ? : any) {

    this.selectedTemplate = [templateData]; 

    this._modalService.open(modalContent, { size: 'lg',backdrop: 'static',}); 

  }; 


  getBillers() {

    const langID = this._utileService.getUserLanguage(); 

    return this._pamentServcie
               .getBillers(langID)
               .subscribe( data => { 

                console.log(data);
                if (data['isSuccess']) {
                       
                  // Set new payements List  
                  this._pamentServcie.setBillers([data['data']['elements'][1]['children']]); 
                  // Set mobile companies 
                  this.mobileBillersList = data['data']['elements'][0]['children']; 
                  this.mobileModalTitle = data['data']['elements'][0]['title']; 
                  
                  
                }
                 
               }, err => {
                 
                 console.log(err);
                
               }); 
  }; 


}
