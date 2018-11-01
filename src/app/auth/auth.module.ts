import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {NgMatModule} from '../shared/ng-mat/ng-mat.module';

import { AuthComponent } from './auth.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
    , ReactiveFormsModule
    , NgMatModule
    , AuthRoutingModule

  ],
  declarations: [
    AuthComponent
    , SignInComponent
    , SignUpComponent
  ]
})
export class AuthModule { }
