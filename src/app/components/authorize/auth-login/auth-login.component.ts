import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthorizeService } from 'src/app/services/authorize.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UtileService } from "src/app/shared/services/utile.service";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { TransferFundsService } from 'src/app/services/transfer-funds.service';
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  @ViewChild('usernameLabel') usernameLabel:ElementRef; 

  faUserCheck = faUserCircle;

  userForm: FormGroup;
  isEngLangActive: boolean = false; 
  isOtpActive = false;

  isLoading: boolean = false; 
  isSubmitted: boolean = false; 
  isErr = false;
  
  errorMessage: string; 
  
  isSetNewPassword: boolean = false; 
  updatePassError: string; 

  private passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[!-\\/|:-@|\\[-`|{-~])(?=.*\\d)(?=.{8,}).+$"); 


  constructor(
    private fb: FormBuilder, 
    private _authService: AuthorizeService,

  ) {
    this.userForm = this.fb.group({
      msisdn: [ '', Validators.required ], 
      pin: ['', Validators.compose([
        Validators.required,
        Validators.pattern(this.passwordPattern)
      ]) ],
      languageId: 1,
    })

   }

   ngAfterViewInit(): void {
     this.focusOnUsername();
     
   }

  ngOnInit(): void {
    
  }


  get f() { return this.userForm.controls; }; 

  focusOnUsername() {
    this.usernameLabel.nativeElement.focus(); 
  };

  toggleLanguage() {

    this.isEngLangActive = !this.isEngLangActive; 
  
  }; 

  getOtpCode() {
    
    this.isErr = false; 

    const schema = {
  //     "domainId": 2,
  // "languageId": 1,
  //     "msisdn": "599123270",
  
        "domainId": 2,
        "languageId": 1,
        "msisdn": this.userForm.value['msisdn'],
        "regOtp": true
    }

    if ( this.userForm.get('pin').errors ) {

      console.log("enter valid password !");
      this.isErr = true;
      this.errorMessage = `
      მინიმალური სიმბოლოების რაოდენობა: 8
      მინიმალური ციფრების რაოდენობა: 1
      მინიმალური დიდი ასოს რაოდენობა: 1
      მინიმალური პატარა ასოს რაოდენობა: 1
      მინიმალური სხვა სიმბოლოს რაოდენობა: 1`; 
      
      
    } else {
     
      this.isOtpActive = true; 

      return this._authService
                 .otpUnauthenticated(schema)
                 .subscribe( data => console.log(data), 
                             err => console.log(err) )
    }
 
  };

  getOtpStatus(e) {
    this.isOtpActive = e; 
  };

  

}
