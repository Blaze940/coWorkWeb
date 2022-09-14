import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AheaderComponent } from './aheader/aheader.component';
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {MaterialUiModule} from "../material-ui/material-ui.module";
import { AboutComponent } from './about/about.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SAllComponent } from './space/s-all/s-all.component';
import { SAddComponent } from './space/s-add/s-add.component';
import { SDeleteComponent } from './space/s-delete/s-delete.component';
import { SEditComponent } from './space/s-edit/s-edit.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    AheaderComponent,
    AboutComponent,
    SAllComponent,
    SAddComponent,
    SDeleteComponent,
    SEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    HttpClientModule,
    MaterialUiModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class AdminModule { }
