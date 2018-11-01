import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SignUpService} from '../../shared/services/sign-up.service';
import {User} from '../../shared/models/user';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  constructor(
    private fb: FormBuilder
    , private signUpService: SignUpService
    , public snackBar: MatSnackBar
    , private authService: AuthService
    , private router: Router
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
      , password: ['', [Validators.required]]
      , rememberEmail: false
    });
  }

  ngOnInit() {
  }

  get sInForm() {
    return this.signInForm.controls;
  }

  onSubmit() {
    const signInFData = this.signInForm.value;
    console.warn(signInFData);

    this.signUpService.getUserByEmail(signInFData.email)
      .subscribe(
        (user: User) => {
          console.log('*user=*', user);
          if (user) {
            if (user.password === signInFData.password) {
              console.log('*correct password*');
              window.localStorage.setItem('user', JSON.stringify(user));
              this.authService.login();
              this.router.navigate(['/dashboard']);
            } else {
              this.snackBar.open('Incorrect password. Try again :)', '', {
                duration: 1500
              });
            }
          } else {
            this.snackBar.open('No user with this email. Try again :)', '', {
              duration: 1500
            });
          }
        }
      );
  }

}
