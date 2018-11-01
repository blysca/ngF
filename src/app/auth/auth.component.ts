import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  navLinks = [
    {
      path: 'sign-in'
      , label: 'Sign in'
    }
    , {
      path: 'sign-up'
      , label: 'Sign up'
    }
  ];

  constructor(
    private router: Router
    , private route: ActivatedRoute
  ) {
    console.log(this.router.url, 'Current URL');
  }

  ngOnInit() {
    if (this.router.url === '/' || this.router.url === '') {
      this.router.navigate(['/sign-in']);
    }
  }
}
