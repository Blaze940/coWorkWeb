import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from "@angular/router";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MaterialUiModule} from "./material-ui/material-ui.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";
import { AlertComponent } from './components/alert/alert.component';
import {MatNativeDateModule} from "@angular/material/core";
import {LoadingPageComponent} from './pages/loading-page/loading-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    AlertComponent,
    LoadingPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    MatCheckboxModule,
    MaterialUiModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,

  ],
  providers: [], ///tjrs actif maintenant
  bootstrap: [AppComponent]
})
export class AppModule { }
