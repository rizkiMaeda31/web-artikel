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
import {HomeComponent} from './modul/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostService} from './service/post.service';
import { TrenComponent } from './modul/tren/tren.component';
import {HttpModule} from '@angular/http';
import { ArchivesComponent } from './modul/archives/archives.component';
import {ClickGoBack} from './directive/click-go-back';
import { AdminComponent } from './modul/admin/admin.component';
import {LoginService} from './service/login.service';
import { PostManagementComponent } from './modul/post-management/post-management.component';
import { PostEditComponent } from './modul/post-edit/post-edit.component';
import {SubscriptionService} from './service/subscription.service';
import { QuillModule } from 'ngx-quill'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TrenComponent,
    ArchivesComponent,
    ClickGoBack,
    AdminComponent,
    PostManagementComponent,
    PostEditComponent
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
      HttpModule,
      QuillModule,
      RouterModule.forRoot([
          {
              path: '',
              redirectTo: '/home',
              pathMatch: 'full'
          },
          {
              path: 'home',
              component: HomeComponent
          },
          {
              path: 'tren',
              component: TrenComponent
          },
          {
              path: 'archives/:date/:id',
              component: ArchivesComponent
          },
          {
              path: 'admin',
              component: AdminComponent
          },
          {
              path: 'post-management',
              component: PostManagementComponent
          },
          {
              path: 'edit/:date/:id',
              component: PostEditComponent
          }
      ])
  ],
  providers: [
      PostService,
      LoginService,
      SubscriptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
