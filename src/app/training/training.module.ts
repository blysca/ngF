import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {NgMatModule} from '../shared/ng-mat/ng-mat.module';

@NgModule({
  imports: [
    CommonModule
    , TrainingRoutingModule
    , ReactiveFormsModule
    , NgMatModule
  ],
  declarations: []
})
export class TrainingModule { }
