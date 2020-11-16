import { Component, OnInit } from '@angular/core';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: 'app-filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.scss']
})
export class FilterTransactionsComponent implements OnInit {

  faChevronDown = faChevronDown;
  isMenuBoxActive = false;
  selectedDate = 'ბოლო 12 თვე'; 

  constructor() { }

  ngOnInit(): void {
  }

  changeDate(date) {
    this.selectedDate = date;
    
  }

  
}
