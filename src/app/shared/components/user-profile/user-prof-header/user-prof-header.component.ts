import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-prof-header',
  templateUrl: './user-prof-header.component.html',
  styleUrls: ['./user-prof-header.component.scss']
})
export class UserProfHeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routeToHome() {
    this.router.navigate(['/user-profile/home']);
  }

}
