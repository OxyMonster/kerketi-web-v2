import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UtileService } from 'src/app/shared/services/utile.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { faHome, faPuzzlePiece ,faPlug, faGamepad, faGlobeAmericas, faCar, faWallet, faGraduationCap, faDonate , faArrowDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-payment-billers-main',
  templateUrl: './payment-billers-main.component.html',
  styleUrls: ['./payment-billers-main.component.scss']
})
export class PaymentBillersMainComponent implements OnInit {

 
  billersAlldata: any[] = []; 
  billersCategoryList: any[] = []; 
  
  dayNightMode: string; 
  destroy: Subject<void> = new Subject<void>(); 
  languageId: string; 

    // * * * Icons * * * * 

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
    
    console.log("hereeeeeee");
         
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

    this.router.navigate([`/user-profile/payments/billers/${categoryName}`]);
    
  };



}
