import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer-funds-categories',
  templateUrl: './transfer-funds-categories.component.html',
  styleUrls: ['./transfer-funds-categories.component.scss']
})
export class TransferFundsCategoriesComponent implements OnInit {

  constructor(
    private _modalService: NgbModal,
    private _router:Router
  ) { }

  ngOnInit(): void {
  }

  routeSendToPerson() {
    this._router.navigate(['/user-profile/transfer-funds/p2p'])
  }

  openModal(modalContent) {
    this._modalService.open(modalContent, { size: 'lg' }); 
  };

}
