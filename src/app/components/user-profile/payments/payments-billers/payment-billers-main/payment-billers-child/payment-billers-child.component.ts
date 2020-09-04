import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments.service';

@Component({
  selector: 'app-payment-billers-child',
  templateUrl: './payment-billers-child.component.html',
  styleUrls: ['./payment-billers-child.component.scss']
})
export class PaymentBillersChildComponent implements OnInit {

  billerList: any[] = []; 
  billersTitle: string; 
  selectedBillerName: string; 

  languageId: string; 
  modalTitle: string;
  
  selectedChildData: any[] = []; 
  
  constructor(
    private _paymentService: PaymentsService,
    private utileService: UtileService,
    private modalService: NgbModal,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.selectedBillerName = this.router.snapshot.params.id; 
    console.log(this.selectedBillerName);
    
    this.languageId = this.utileService.getUserLanguage();
    this.getBillersList(); 

  }; 

  getBillersList() {    

    // * * * If getBillers req is allready sent & & & &  use Subject 
    if ( this._paymentService.billerData && this._paymentService.billerData.length > 0 ) {

  
      this._paymentService.billerData[0].map( item => {

        if ( item.name === this.selectedBillerName ) {

          this.billerList = item['children']; 
          this.billersTitle = item['title'];
        }
        
      }); 
      
    // & & & & Else post billers  * * * * * 

    } else {
      
      return this._paymentService
                 .getBillers(this.languageId)
                 .subscribe( data => {
                     console.log(data);
                     
                     const allBillersData = data['data']['elements'][1]['children']; 
                   
                      allBillersData.map( item => {

                        if ( this.selectedBillerName === item['name'] ) {

                          this.billerList = item['children']; 

                        }
                      })
                   
          
                 }, err => console.log(err) ); 

      };


  }; 


  openModal(modalContent: any, modalTitle: string, selectedCat: string) {

    this.selectedChildData = selectedCat['children']; 

    console.log(this.selectedChildData);
    
    this.modalTitle = modalTitle; 
    this.modalService.open(modalContent, { size: 'xl',backdrop: 'static' });

  }


}
