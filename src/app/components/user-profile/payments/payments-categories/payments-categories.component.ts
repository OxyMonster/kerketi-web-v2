import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-payments-categories',
  templateUrl: './payments-categories.component.html',
  styleUrls: ['./payments-categories.component.scss']
})
export class PaymentsCategoriesComponent implements OnInit {

  mobileBillers: any[] = []; 
  allBillersData: any[] = []; 
  modalTitle: string; 
  isLoading: boolean = true; 

  templatesData: any[] = []; 
  selectedTemplate: any[] = []; 

  constructor(
    private _router: Router,
    private _paymentService: PaymentsService,
    private _modalService: NgbModal,
    private _utileService: UtileService
  ) { }

  ngOnInit(): void {
    
    this.getBillers(); 

  }

  routeToBillers() {

    this._router.navigate(['/user-profile/payments/billers']);
  };


  openModal(modalContent: any, templateData ? : any) {

    this.selectedTemplate = [templateData]; 

    this._modalService.open(modalContent, { size: 'lg',backdrop: 'static',}); 

  }; 

  getBillers() {

    const langID = this._utileService.getUserLanguage(); 

    return this._paymentService
               .getBillers(langID)
               .subscribe( data => { 

                

                console.log(data);
                if (data['isSuccess']) {
                                    
                  // Set biller categories 
                  this._paymentService.setBillers([data['data']['elements'][1]['children']]); 
                  // Set mobile pay companies 
                  this.mobileBillers = data['data']['elements'][0]['children']; 
                  
                  this.modalTitle = data['data']['elements'][0]['title']; 
                  console.log(this.mobileBillers);
                  this.isLoading = false; 
                  
                }
                 
               }, err => {
                 
                 console.log(err);
                
               }); 
  }; 


}
