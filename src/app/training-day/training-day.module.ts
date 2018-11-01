import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingDayRoutingModule } from './training-day-routing.module';
import { TrainingDayComponent } from './training-day.component';
import {NgMatModule} from '../shared/ng-mat/ng-mat.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
    , ReactiveFormsModule
    , NgMatModule
    , TrainingDayRoutingModule
  ],
  declarations: [TrainingDayComponent]
})
export class TrainingDayModule { }
