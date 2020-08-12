import { Component, OnInit } from '@angular/core';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UtileService } from "src/app/shared/services/utile.service";
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  userForm: FormGroup;
  isEngLangActive: boolean = false; 
  isError: boolean = false; 
  isLoading: boolean = false; 
  isSubmitted: boolean = false; 
  errorMessage: string; 
  isSetNewPassword: boolean = false; 
  updatePassError: string; 


  constructor(
    private router: Router,
    private fb: FormBuilder, 
    private _authService: AuthorizeService,
  ) {
    this.userForm = this.fb.group({
      msisdn: [ '', Validators.required ], 
      pin: ['', Validators.required ],
      languageId: 1,
    })

   }

  ngOnInit(): void {

  }


  get f() { return this.userForm.controls; }; 


  toggleLanguage() {

    this.isEngLangActive = !this.isEngLangActive; 
    
    // return this.isEngLangActive ? this.transalteService.use('en') : this.transalteService.use('geo'); 

  
  }; 


  onSubmit(userForm: any) {

    this.isError = false;
    this.isSubmitted = true; 
      //  * * * Set Language * * * 
      this.isEngLangActive ? this.userForm.controls['languageId'].setValue(2) : 
                             this.userForm.controls['languageId'].setValue(1); 

      if ( this.isSubmitted && this.userForm.valid ) {
        
            this.isLoading = true; 

              // * * * Authorize * * * 
            this._authService
                .userLogin(this.userForm.value)
                .subscribe( data => {
        
                  // * * * Error * * * *  
                  if ( !data['isSuccess'] ) {
        
                    this.isError = true; 
                    this.isLoading = false;
                    this.errorMessage = data['errorMessage']
        
                  // * * * Set new password * * * 
                    if ( data['errorCode'] === 'CORE_1015' ) {
        
                      this.isSetNewPassword = true; 
                      this.updatePassError = data['errorMessage']; 
        
                    } 
                  // * * * *  Success * * * *  
        
                  } else { 
                    this.isError = false;
                    this.isLoading = false;
        
                    // * * * Save user info in Local Stroge * * * * 
                    localStorage.setItem('sessionId', data['data']['sessionId']);
                    localStorage.setItem('msisdn', userForm.value.msisdn );
                    this.isEngLangActive ? localStorage.setItem('languageId', '2') : 
                                           localStorage.setItem('languageId', '1'); 
        
                    // * * * Navigate to user profile * * * * * 
                    this.router.navigate(['/user-profile/home']); 
                  }
                  console.log(data);
                  
                  
                }, err => console.log(err)); 


      } else { 

        return; 
      }
    

  }; 


  getResult(e) {
    
    console.log(e);
    this.isSetNewPassword = e; 
    
  }; 




}
