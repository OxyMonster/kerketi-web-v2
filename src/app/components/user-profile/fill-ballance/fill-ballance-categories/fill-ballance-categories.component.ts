import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-ballance-categories',
  templateUrl: './fill-ballance-categories.component.html',
  styleUrls: ['./fill-ballance-categories.component.scss']
})
export class FillBallanceCategoriesComponent implements OnInit {

  constructor(
  private _router: Router
  ) { }

  ngOnInit(): void {
  }

  routeToCards() {
    this._router.navigate(['/user-profile/fill-ballance/card']);
  };

}
