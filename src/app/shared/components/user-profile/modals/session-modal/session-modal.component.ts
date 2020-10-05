import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-session-modal',
  templateUrl: './session-modal.component.html',
  styleUrls: ['./session-modal.component.scss']
})
export class SessionModalComponent implements OnInit {

  @Input() modalType: string; 

  constructor(
 
  ) { }

  ngOnInit(): void {
    console.log(this.modalType);
    
  }

  
}
