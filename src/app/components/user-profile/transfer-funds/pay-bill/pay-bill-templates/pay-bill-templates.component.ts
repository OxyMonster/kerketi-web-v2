import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { Router } from '@angular/router';
import { faEllipsisV, faPlus } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pay-bill-templates',
  templateUrl: './pay-bill-templates.component.html',
  styleUrls: ['./pay-bill-templates.component.scss']
})
export class PayBillTemplatesComponent implements OnInit {

  faEllipsisV = faEllipsisV; 
  faPlus = faPlus; 

  templatesData: any[] = []; 
  mobileBillersList: any[] = []
  selectedTemplate: any[] = []; 
  amount: number; 

  constructor(
    private _utileService: UtileService,
    private _paymentService: PaymentsService,
    private _router: Router,
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {

    this.getTemplates(); 

  }; 


  changeRoute() {
      this._router.navigate(['/user-profile/transfer/pay-bill/new']);
  };


  selectTemplate(index: number, template: any) {
    // clear 
    this.templatesData.map(item => {
      item.isActive = false; 
    })
    this.templatesData[index]['isActive'] = true; 
    this.selectedTemplate = [template];
  };

  removeSelection() {
    this.selectedTemplate = []; 
    this.templatesData.map(item => {
      item.isActive = false; 
    })
  }


  deleteTemplates(template:any, index: number) {

    const deleteTemplateSchema = {
      "domainId": 0,
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId(),
      "templateId": template['id']
    };

    console.log(deleteTemplateSchema);
    
    return this._paymentService
               .deleteTemplates(deleteTemplateSchema)
               .subscribe( data => {
                console.log(data);
                if (data['isSuccess']) {
                  this.templatesData.splice(index, 1); 
                };
               } )  
  }; 

  openModal(modalContent: any) {
    if (this.amount > 0) {
      this.selectedTemplate[0]['amount'] = this.amount;
      return this._modalService.open(modalContent, { size: 'lg' }); 
    }
  }


  getTemplates() {

    const getTempatesSchema = {
      "languageId": this._utileService.getUserLanguage(),
      "msisdn": this._utileService.getMsidn(),
      "sessionId": this._utileService.getSessionId(),
      "type": 1
    }; 

    return this._paymentService
               .getTemplates(getTempatesSchema)
               .subscribe( data => {
                
                 this.templatesData = data['data']; 
                
                  
                // * * * Get Dept for each tempalte * * * 
                this.templatesData.map( item => {

                  this.getDebt(item)
                      .subscribe( data => {
                        item.deptData = data['data']['keyValueTexts']
                        item.isActive = false; 
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

      return this._paymentService
                 .getDebt(getDeptSchema)
      

  };

  getBillers() {

    const langID = this._utileService.getUserLanguage(); 

    return this._paymentService
               .getBillers(langID)
               .subscribe( data => { 

                console.log(data);
                if (data['isSuccess']) {
                       
                  // Set new payements List  
                  this._paymentService.setBillers([data['data']['elements'][1]['children']]); 
                  // Set mobile companies 
                  this.mobileBillersList = data['data']['elements'][0]['children'];                   
                  
                }
                 
               }, err => {
                 
                 console.log(err);
                
               }); 
  }; 


}
