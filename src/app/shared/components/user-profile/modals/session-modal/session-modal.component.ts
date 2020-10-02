import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UtileService } from 'src/app/shared/services/utile.service';

@Component({
  selector: 'app-session-modal',
  templateUrl: './session-modal.component.html',
  styleUrls: ['./session-modal.component.scss']
})
export class SessionModalComponent implements OnInit {

  constructor(
    private _utileService: UtileService,
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  refreshSession() { 
      const parameters = {
        "domainId": 0,
        "languageId": this._utileService.getUserLanguage(),
        "msisdn": this._utileService.getMsidn(),
        "sessionId": this._utileService.getSessionId(),
        "username": "string"
      }; 

      return this._utileService
                 .refreshSession(parameters)
                 .subscribe( data => {
                  console.log(data);
                  this._modalService.dismissAll()
                  
                 }, err => {
                   console.log(err);
                    this._utileService.logOut();
                 })
  }
}
