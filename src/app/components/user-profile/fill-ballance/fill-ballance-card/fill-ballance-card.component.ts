import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fill-ballance-card',
  templateUrl: './fill-ballance-card.component.html',
  styleUrls: ['./fill-ballance-card.component.scss']
})
export class FillBallanceCardComponent implements OnInit {

  modalTitle: string; 

  constructor(
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal(modalType: string, modalContent: any) {
    
    this.modalTitle = modalType; 
    this._modalService.open(modalContent, { size: 'lg' }); 
    
  }
   
}
