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
import { RegisterComponent } from './pages/register/register.component';
import { SigninComponent } from './pages/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
