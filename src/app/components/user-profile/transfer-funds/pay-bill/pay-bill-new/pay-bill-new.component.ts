import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UtileService } from 'src/app/shared/services/utile.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { faChevronLeft, faHome, faPuzzlePiece ,faPlug, faGamepad, faGlobeAmericas, faCar, faWallet, faGraduationCap, faDonate , faArrowDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pay-bill-new',
  templateUrl: './pay-bill-new.component.html',
  styleUrls: ['./pay-bill-new.component.scss']
})
export class PayBillNewComponent implements OnInit {

 
 
  billersAlldata: any[] = []; 
  billersCategoryList: any[] = []; 
  
  dayNightMode: string; 
  destroy: Subject<void> = new Subject<void>(); 
  languageId: string; 

    // * * * Icons * * * * 
    billerIconLink = 'assets/img/biller-illustrations/item.name.svg'
    faHome = faHome;
    faPlug = faPlug; 
    faGamepad= faGamepad; 
    faGlobeAmericas = faGlobeAmericas;
    faCar = faCar; 
    faWallet = faWallet; 
    faGraduationCap = faGraduationCap;
    faDonate = faDonate;
    faPuzzlePiece = faPuzzlePiece;
    faArrowDown = faArrowDown;
    faChevronLeft = faChevronLeft; 
  
  constructor(
    private paymentService: PaymentsService,
    private utileService: UtileService,  
    private router: Router
  ) { }

  ngOnInit(): void {

    this.dayNightMode = localStorage.getItem('mode'); 
    
    this.languageId = this.utileService.getUserLanguage();

    console.log(this.paymentService.billerData);
    
    this.getBillers(); 


  };
  


  getBillers() {    
             
      //  * * * check if billerData exists  * * * * 
        if ( this.paymentService.billerData && this.paymentService.billerData.length > 0 ) { 
          console.log(this.paymentService.billerData);
          
          
          this.billersAlldata = this.paymentService.billerData[0];
          this.billersCategoryList = this.billersAlldata.map(item => item );

        } else { 
          
           return this.paymentService
                      .getBillers(this.languageId)
                      .pipe( takeUntil(this.destroy) )
                      .subscribe( data => {
                          
                            this.billersAlldata = data['data']['elements'][1]['children'];             
                            this.billersCategoryList = this.billersAlldata.map( item => item );
                      
   
          }, err => console.log(err) )

        }
    
   
    
          
  }; 

  routeToCategory(categoryName: string) {

    this.router.navigate([`/user-profile/transfer/pay-bill/${categoryName}`]);
    
  };

  routeBack() {
    return this.router.navigate(['/user-profile/transfer/pay-bill/pay']);
  }


}
