import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-transfer-funds',
  templateUrl: './transfer-funds.component.html',
  styleUrls: ['./transfer-funds.component.scss']
})
export class TransferFundsComponent implements OnInit {

  
  constructor(
    private _modalService: NgbModal,
  ) { }

  ngOnInit(): void {
  }

  openModal(modalContent) {
    this._modalService.open(modalContent, { size: 'lg' }); 
  };


}
