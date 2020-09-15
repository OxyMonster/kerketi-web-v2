import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { UtileService } from 'src/app/shared/services/utile.service';
 
@Component({
  selector: 'app-p2p-add-new-template',
  templateUrl: './p2p-add-new-template.component.html',
  styleUrls: ['./p2p-add-new-template.component.scss']
})
export class P2pAddNewTemplateComponent implements OnInit {

 
  isNumberValid: boolean = false; 
  isDefault: boolean = false; 
  isLoading: boolean = false;
  phoneNumber: string; 
  selectedUserFullname: string;
  userNotFoundErr: boolean = false; 

  @Output() result: EventEmitter<any> = new EventEmitter<any>(); 

  constructor(
    private _homeService: HomeService,
    private _utileService: UtileService
  ) { }

  ngOnInit(): void {
  }


  nextStep(mobileNumber: string) {  

    const getUserInfoSchema = {
        "domainId": 0,
        "languageId": 1,
        "msisdn": this.phoneNumber,
        "sessionId": this._utileService.getSessionId()
    }

    if ( mobileNumber.length === 9  ) {
      this.isLoading = true; 
      this._homeService
          .getUserInfo(getUserInfoSchema)
          .subscribe( data => {
            this.isLoading = false; 
            if ( data['isSuccess'] ) {  
              this.isNumberValid = true; 
              this.isDefault = true; 
              this.selectedUserFullname = data['data']['firstName'] + ' ' + data['data']['lastName']; 
            } else {
              this.userNotFoundErr = true; 
            }
            console.log(data);
            
          })

    } else {
      this.isNumberValid = false ;
      this.isDefault = false; 

    }    
    
  };


  onComplete() {

    const userData = {
      'transferTo': this.phoneNumber, 
      'name': this.selectedUserFullname,
      'isFavourite': true
  }
    
    this.result.emit(userData); 

  }


}
