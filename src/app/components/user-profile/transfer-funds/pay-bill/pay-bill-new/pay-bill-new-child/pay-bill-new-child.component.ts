import { Component, OnInit } from '@angular/core';
import { UtileService } from 'src/app/shared/services/utile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentsService } from 'src/app/services/payments.service';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-pay-bill-new-child',
  templateUrl: './pay-bill-new-child.component.html',
  styleUrls: ['./pay-bill-new-child.component.scss']
})
export class PayBillNewChildComponent implements OnInit {

  faChevronLeft = faChevronLeft; 

  isSelected: boolean = false; 
 
  billerList: any[] = []; 
  billersTitle: string; 
  selectedBillerName: string; 

  languageId: string; 
  modalTitle: string;
  
  selectedChildData: any[] = []; 
  
  constructor(
    private _paymentService: PaymentsService,
    private utileService: UtileService,
    private router: ActivatedRoute,
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


  dispayAddNewTemplate(selectedCat: string) {

    this.selectedChildData = selectedCat['children']; 
    this.isSelected = true; 
  };


  routeBack(type) {
    type === 'one' ?  
    window.history.back() :
    this.isSelected = false;
  }



}
