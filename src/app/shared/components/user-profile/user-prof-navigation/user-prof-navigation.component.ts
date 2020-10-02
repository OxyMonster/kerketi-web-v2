import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  faHouseUser, faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-prof-navigation',
  templateUrl: './user-prof-navigation.component.html',
  styleUrls: ['./user-prof-navigation.component.scss']
})
export class UserProfNavigationComponent implements OnInit {

  
  faHome = faHouseUser; 
  faSortDown = faSortDown; 

  isHideSubmenu: boolean = false;
  isTransferRouteActive: boolean = false;

  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.route.url.includes('transfer') ? this.isTransferRouteActive = true :
    this.isTransferRouteActive = false;
  }

  hideSubMenu() {
    this.isHideSubmenu = true; 
  };

  changeRoute() {
    this.isTransferRouteActive = false;
    this.isHideSubmenu = false;
  };



  

}
