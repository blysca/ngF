import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngForms';

  navLinks = [
    {
      path: 'sign-in'
      , label: 'Sign in'
    }
    , {
      path: 'sign-up'
      , label: 'Sign up'
    }
    , {
      path: 'dashboard'
      , label: 'Dashboard'
    }
    , {
      path: 'training-day'
      , label: 'Training Day'
    }
  ];
}
