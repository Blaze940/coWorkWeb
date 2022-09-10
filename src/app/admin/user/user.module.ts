import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UIndexComponent } from './u-index/u-index.component';
import { UEditComponent } from './u-edit/u-edit.component';
import { UAddComponent } from './u-add/u-add.component';
import { UDeleteComponent } from './u-delete/u-delete.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import { UAllComponent } from './u-all/u-all.component';
import {MaterialUiModule} from "../../material-ui/material-ui.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UIndexComponent,
    UEditComponent,
    UAddComponent,
    UDeleteComponent,
    UAllComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialUiModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
