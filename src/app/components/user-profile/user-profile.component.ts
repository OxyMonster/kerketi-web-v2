import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slider, transformer, fader, stepper,fadeInAnimation } from "src/app/shared/animations/route-animations";
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  animations: [ 
    fader,
    // fadeInAnimation, 
    // slider, 
    // transformer,
    // stepper
  ]

})
export class UserProfileComponent implements OnInit {

  constructor(
    private _translateService: TranslateService
  ) {

    this._translateService.addLangs(['en','geo'])
    this._translateService.setDefaultLang('geo');
    this._translateService.use('geo');
   }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
