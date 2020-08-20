import { Component, OnInit, Input } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-header', 
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent implements OnInit {
  
  @Input() title: string; 

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  };
    
  ngOnInit() { 

   }; 

  close() {
    this.modalService.dismissAll();
  }

}
