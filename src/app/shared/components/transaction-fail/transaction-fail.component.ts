import { Component, OnInit } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-fail',
  templateUrl: './transaction-fail.component.html',
  styleUrls: ['./transaction-fail.component.scss']
})
export class TransactionFailComponent implements OnInit {

  faExclamationCircle = faExclamationCircle; 

  constructor() { }

  ngOnInit(): void {
  }


}
