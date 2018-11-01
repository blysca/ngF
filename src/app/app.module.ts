import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {NgMatModule} from './shared/ng-mat/ng-mat.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';
import {HttpClientModule} from '@angular/common/http';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';
import {AuthService} from './shared/services/auth.service';
import {AuthModule} from './auth/auth.module';
import {DashboardModule} from './dashboard/dashboard.module';
import {TrainingDayModule} from './training-day/training-day.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    InternalServerErrorComponent,
    SnackBarComponent
  ],
  imports: [
    BrowserModule
    , BrowserAnimationsModule
    , HttpClientModule
    , FormsModule
    , ReactiveFormsModule
    , NgMatModule
    , AuthModule
    , DashboardModule
    , TrainingDayModule
    , AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
