import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
} from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';
import {HomeComponent} from "./modul/home/home.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
      ReactiveFormsModule,
      FormsModule,
      MatAutocompleteModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatCardModule,
      MatCheckboxModule,
      MatChipsModule,
      MatTableModule,
      MatDatepickerModule,
      MatDialogModule,
      MatExpansionModule,
      MatFormFieldModule,
      MatGridListModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatSelectModule,
      MatSidenavModule,
      MatSlideToggleModule,
      MatSliderModule,
      MatSnackBarModule,
      MatSortModule,
      MatStepperModule,
      MatTabsModule,
      MatToolbarModule,
      MatTooltipModule,
      BrowserAnimationsModule,
      BrowserModule,
      RouterModule.forRoot([
          {
              path: '',
              redirectTo: '/home',
              pathMatch: 'full'
          },
          {
              path: 'home',
              component: HomeComponent
          }
      ])
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
