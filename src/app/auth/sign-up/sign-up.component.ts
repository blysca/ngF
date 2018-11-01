import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

import {MatchPasswordValidation} from '../../shared/form/validators/match-password-validation';
import {SignUpService} from '../../shared/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  subscriptions: Subscription;
  signUpForm: FormGroup;

  constructor(
    public snackBar: MatSnackBar
    , private fb: FormBuilder
    , private signupService: SignUpService
    , private router: Router
  ) {
    this.signUpForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]]
      , email: ['', Validators.compose([Validators.required, Validators.email]), this.validateEmailNotTaken.bind(this)
      ]
      , password: this.fb.group({
        main: ['', [Validators.required, Validators.minLength(4)]]
        , confirm: ['', [Validators.required]]
      }, {
        validator: MatchPasswordValidation.MatchPassword // your validation method
      })
    });
  }

  validateEmailNotTaken(control: AbstractControl) {
    return this.signupService.checkEmailNotTaken(control.value)
      .pipe(
        map(res => {
          return res ? null : {emailTaken: true};
        })
      );
  }

  get sUpForm() {
    return this.signUpForm.controls;
  }

  get sUpFormPassword() {
    return this.sUpForm.password;
  }

  ngOnInit() {
    console.log('*sign-up page*');
  }

  onSubmit() {
    const user = {
      name: this.signUpForm.value.username
      , email: this.signUpForm.value.email
      , password: this.signUpForm.value.password.main
    };
    console.warn(this.signUpForm);
    console.log('*submit user = *', user);
    this.subscriptions = this.signupService.createUser(user)
      .subscribe(
        res => {
          console.log('*createUser res *', res);
          this.snackBar.open('user account was created', '', {
            duration: 2000
          });

          setTimeout(() => {
            this.router.navigate(['/sign-in']);
          }, 2000);
        }
        , err => {
          console.log('*createUser ERORR *', err);
          this.snackBar.open('*createUser ERORR *' + err, '', {
            duration: 2000
          });
        }
        , () => {
          console.log('*createUser COPLETE *');
          /*this.snackBar.open('*COPLETE*', '', {
            duration: 2000
          });*/
        }
      );
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();

    }
  }

}
