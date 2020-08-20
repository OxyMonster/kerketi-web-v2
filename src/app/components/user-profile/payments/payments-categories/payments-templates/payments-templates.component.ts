import { Component, OnInit } from '@angular/core';
import { PaymentsService } from 'src/app/services/payments.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-payments-templates',
  templateUrl: './payments-templates.component.html',
  styleUrls: ['./payments-templates.component.scss']
})
export class PaymentsTemplatesComponent implements OnInit {
  // faMobile = faMobile; 
  // faPlus = faPlus; 
  // faTimesCircle = faTimesCircle; 

  isLoading: boolean = true; 

  templatesData: any[] = []; 
  selectedTemplate: any[] = []; 

  constructor(
    private paymentService: PaymentsService,
    private utileService: UtileService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getTemplates(); 
  }


  getTemplates() {

    const getTempatesData = {
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "sessionId": this.utileService.getSessionId(),
      "type": 1
    }; 

    return this.paymentService
               .getTemplates(getTempatesData)
               .subscribe( data => {

                this.templatesData = data['data']; 
                console.log(this.templatesData);
                
                
               }, err => {

                console.log(err);
                
               });

  };



  openModal(modalContent: any, templateData ? : any) {

    this.selectedTemplate = [templateData]; 

    this.modalService.open(modalContent, { size: 'xl',backdrop: 'static',}); 

  }; 


}
