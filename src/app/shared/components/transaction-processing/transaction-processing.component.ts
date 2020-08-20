import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-transaction-processing',
  templateUrl: './transaction-processing.component.html',
  styleUrls: ['./transaction-processing.component.scss']
})
export class TransactionProcessingComponent implements OnInit {

  faSpinner = faSpinner; 

  constructor(
    private router: Router, 
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }


  routeToTransHistory() {

    this.router.navigate(['/user-profile/transactions-history']); 
    this.modalService.dismissAll(); 
    
  }


}
