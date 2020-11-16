import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { UtileService } from 'src/app/shared/services/utile.service';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {

  @Output() isOtpActive: EventEmitter<boolean> = new EventEmitter<boolean>(); 
  @Input() userData: any; 

  @ViewChild('otpLabel') otpLabel: ElementRef; 
  
  isErr: boolean = false;
  errMessage: string; 

  otpCode: string;
  isLoading: boolean = false;
  isEngLangActive: boolean = false

  faChevronLeft = faChevronLeft;

   

  constructor(
    private _authService: AuthorizeService,
    private router: Router,
    private _utileService: UtileService
  ) { }
  
  ngAfterViewInit(){

    this.focusOnOtp()

  }

  ngOnInit(): void {
    console.log(this.userData); 
     
  }


  focusOnOtp() {
    this.otpLabel.nativeElement.focus();
  }

  goBack() {
    this.isOtpActive.emit(false); 
    console.log(this.otpCode);
  };

  getOtpCode() {  

    const schema = {
        "domainId": 2,
        "languageId": 1,
        "msisdn": this.userData.value['msisdn'],
        "regOtp": true
    }
    return this._authService
               .otpUnauthenticated(schema)
               .subscribe( data => console.log(data), 
                           err => console.log(err) )

  };

  onSubmit() {

    const loginSchema = {
      "domainId": 2,
      "languageId": 1,
      "otp": this.otpCode,
      "password": this.userData.value['pin'],
      "username": this.userData.value['msisdn']
    }
      // //  * * * Set Language * * * 
      // this.isEngLangActive ? this.userData['languageId'].setValue(2) : 
      //                        this.userData['languageId'].setValue(1); 

      if ( this.userData.valid ) {
        
            this.isLoading = true; 

              // * * * Authorize * * * 
            this._authService
                .userLogin(loginSchema)
                .subscribe( data => {
        
                  // * * * Error * * * *  
                  if ( !data['isSuccess'] ) {
                      // this.isLoading = false;
                      this.isErr = true;
                      this.errMessage = data['errorMessage'];
                    

                  // * * * *  Success * * * *  
        
                  } else { 
                    this.isLoading = false;
              
                    // * * * Save user info in Local Stroge * * * * 
                    localStorage.setItem('sessionId', data['data']['sessionId']);
                    localStorage.setItem('msisdn', this.userData['value']['msisdn'] );
                    localStorage.setItem('languageId', '1'); 

                    // * * * Check if Session is valid and navigate to user Profile * * * * *
                    if ( this._utileService.isSessionIDValid() ) {
                      
                      this.router.navigate(['/user-profile/home']); 
                    } else {
                      
                      this.router.navigate(['/main/login']);
                    }; 
                  }
                  console.log(data);
                  
                }, err => console.log(err)); 


      } else { 

        return; 
      }
    
  }; 


}
