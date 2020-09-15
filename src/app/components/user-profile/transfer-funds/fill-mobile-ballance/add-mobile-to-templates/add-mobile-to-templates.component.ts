import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { PaymentsService } from 'src/app/services/payments.service';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
 
@Component({
  selector: 'app-add-mobile-to-templates',
  templateUrl: './add-mobile-to-templates.component.html',
  styleUrls: ['./add-mobile-to-templates.component.scss']
})
export class AddMobileToTemplatesComponent implements OnInit {

  faSearchPlus = faSearchPlus; 

  mobileProvidersList: any[] = []; 
  selectedProvidersList: any[] = []; 
  finalSelectedProvider: any; 

  isFinalProviderSelected: boolean = false; 
  isProviderSelected: boolean = false; 
  isNumberValid: boolean = false; 
  isDefault: boolean = false; 
  isLoading: boolean = false;

  phoneNumber: string; 
  selectedUserFullname: string;
  userNotFoundErr: boolean = false; 
  
  @Output() result: EventEmitter<any> = new EventEmitter<any>(); 

  constructor(
    private _homeService: HomeService,
    private _utileService: UtileService,
    private _paymentService: PaymentsService
  ) { }

  ngOnInit(): void {

    this.getMobileProviders(); 

  }


  nextStep(mobileNumber: string) {  

    this.isNumberValid = true; 
    this.isDefault = true;   
    
  };


  onComplete() {
    
    const userData = {
      'abonentCode': this.phoneNumber, 
      'serviceId': this.finalSelectedProvider['service']['id'],
      'providerTitle': this.finalSelectedProvider['title'], 
      'isFavourite': true
  }

    console.log(userData);

    
    this.result.emit(userData); 

  };


  getMobileProviders() {

      return this._paymentService
                 .getBillers(this._utileService.getUserLanguage())
                 .subscribe( data => {
                  console.log(data);
                  this.mobileProvidersList = data['data']['elements'][0]['children']; 
                  console.log(this.mobileProvidersList);
                  
                 }, err => {
                  console.log(err);
                  
                 }); 

  };


  selectMobileProvider(selectedProvider, finalSelect: boolean) {
    console.log(selectedProvider);
    
    if ( !finalSelect ) {

      console.log(selectedProvider);
      this.isProviderSelected = true;
      this.selectedProvidersList = selectedProvider['children']; 
    } else {
      this.isFinalProviderSelected = true; 
      this.finalSelectedProvider = selectedProvider; 
      console.log(this.finalSelectedProvider);
      
    }
   
    
  }



}
