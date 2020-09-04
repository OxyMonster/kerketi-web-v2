import { Component, OnInit } from '@angular/core';
import {  faHouseUser, faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-prof-navigation',
  templateUrl: './user-prof-navigation.component.html',
  styleUrls: ['./user-prof-navigation.component.scss']
})
export class UserProfNavigationComponent implements OnInit {

  
  faHome = faHouseUser; 
  faSortDown = faSortDown; 

  constructor() { }

  ngOnInit(): void {
  }

}
