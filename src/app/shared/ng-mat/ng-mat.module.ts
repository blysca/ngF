import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule
  , MatButtonModule
  , MatButtonToggleModule
  , MatCardModule
  , MatCheckboxModule
  , MatChipsModule
  , MatDatepickerModule
  , MatDialogModule
  , MatExpansionModule
  , MatFormFieldModule
  , MatGridListModule
  , MatIconModule
  , MatInputModule
  , MatListModule
  , MatMenuModule
  , MatPaginatorModule
  , MatProgressBarModule
  , MatProgressSpinnerModule
  , MatRadioModule
  , MatSelectModule
  , MatSidenavModule
  , MatSliderModule
  , MatSlideToggleModule
  , MatSnackBarModule
  , MatSortModule
  , MatStepperModule
  , MatTableModule
  , MatTabsModule
  , MatToolbarModule
  , MatTooltipModule
  , MatTreeModule
} from '@angular/material';

const matModules = [
  MatTreeModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule
];

@NgModule({
  imports: [
    CommonModule
    , matModules
  ]
  , exports: [matModules]
})
export class NgMatModule { }
