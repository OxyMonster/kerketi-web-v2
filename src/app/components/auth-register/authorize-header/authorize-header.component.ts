import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorize-header',
  templateUrl: './authorize-header.component.html',
  styleUrls: ['./authorize-header.component.scss']
})
export class AuthorizeHeaderComponent implements OnInit {

  isEngActive: boolean = false;

  constructor(
    private _router:  Router
  ) { }

  ngOnInit(): void {
  }


  routeToHome() {

    this._router.navigate(['/main/login']);
  }; 

  toggleLanguage() {
    this.isEngActive = !this.isEngActive;
  }

  
}
