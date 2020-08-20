import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PaymentsService } from 'src/app/services/payments.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-p2p-templates',
  templateUrl: './p2p-templates.component.html',
  styleUrls: ['./p2p-templates.component.scss']
})
export class P2pTemplatesComponent implements OnInit {

  faTrash = faTrash; 

  templatesData: any[] = [0]; 
  isSelected: boolean = false; 

  selectedTemplate: any[] = []; 

  randomAvatarNumber: number; 


  constructor(
    private utileService: UtileService,
    private _paymentService: PaymentsService, 
    private modalService: NgbModal 
  ) { }

  ngOnInit(): void {

    this.getTemplates(); 
    var min=1; 
    var max=2;  
    
    // this.randomAvatarNumber =  Math.floor(Math.random() * (max - min) + min);
    
    // console.log(this.randomAvatarNumber);
    
  }; 


  chooseUser(selectedTemplate: any) {
    this.selectedTemplate = selectedTemplate; 
    return selectedTemplate['isActive'] = !selectedTemplate['isActive']; 

  }; 


  getTemplates() {

    const getTempatesData = {
      "languageId": this.utileService.getUserLanguage(),
      "msisdn": this.utileService.getMsidn(),
      "sessionId": this.utileService.getSessionId(),
      "type": 2
    }; 

    return this._paymentService
               .getTemplates(getTempatesData)
               .subscribe( data => {

               
                this.templatesData = data['data']; 
                this.templatesData.map( item => item.isActive = false ); 

                console.log(this.templatesData);
                
                
               }, err => {

                console.log(err);
                
               });

  };

  deleteTemplates(selectedTemplate: string, index: number) {

    console.log(selectedTemplate);
    
    const templateData = {

        "languageId": this.utileService.getUserLanguage(),
        "msisdn": this.utileService.getMsidn(),
        "sessionId": this.utileService.getSessionId(),
        "templateId": selectedTemplate['id']
      
    }; 


    this.templatesData.splice(index, 1); 

    return this._paymentService    
               .deleteTemplates(templateData)
               .subscribe( data => {

                console.log(data);
                
               }, err => {

                console.log(err);
                
               }); 

  }; 

  

  openModal(modalContent: any) {

    this.modalService.open(modalContent, { size: 'xl',backdrop: 'static' }); 

  }

}
