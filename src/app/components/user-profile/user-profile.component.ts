import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { UtileService } from 'src/app/shared/services/utile.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
 

})
export class UserProfileComponent implements OnInit {

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  title = 'angular-idle-timeout';

  modalType: string; 
 
  @ViewChild("sessionModal", { static: true }) sessionModal: ElementRef;

  constructor(
    private _translateService: TranslateService,
    private _utileService: UtileService,
    private idle: Idle, 
    private keepalive: Keepalive,
    private _modalService: NgbModal
  ) {  

    this._translateService.addLangs(['en','geo'])
    this._translateService.setDefaultLang('geo');
    this._translateService.use('geo');

    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(300);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => { 
      this.refreshSession(); 
      this._modalService.dismissAll();
      this.idleState = 'No longer idle.'
      console.log(this.idleState);
      this.reset();
    }); 
    
    idle.onTimeout.subscribe(() => {
      this.modalType = 'expired'; 
      this._modalService.dismissAll();
      this.idleState = 'Timed out!';
      this.timedOut = true;
      console.log(this.idleState); 
      this._utileService.logOut();
    });
    
    idle.onIdleStart.subscribe(() => {
        this.modalType = 'alert';
        this._modalService.dismissAll();
        this.openModal();
        this.idleState = 'You\'ve gone idle!'
        console.log(this.idleState);

    }); 
    
    idle.onTimeoutWarning.subscribe((countdown) => {
      this.idleState = 'You will time out in ' + countdown + ' seconds!'
      console.log(this.idleState);
    }); 

    // sets the ping interval to 15 seconds
    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
   }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }; 

  reset() {
    this.idle.watch();
    this.idleState = 'Started.';
    this.timedOut = false;
  }; 


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
};

  openModal() {

    this._modalService.open(this.sessionModal, { size: 'md' }); 
  };






}
