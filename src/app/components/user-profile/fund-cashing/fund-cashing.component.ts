import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fund-cashing',
  templateUrl: './fund-cashing.component.html',
  styleUrls: ['./fund-cashing.component.scss']
})
export class FundCashingComponent implements OnInit {

  constructor(
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openBankTransfer(bankTransferModal) {

    this._modalService.open(bankTransferModal, { size: 'lg' });
  }

}
