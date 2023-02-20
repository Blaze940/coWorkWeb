import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { RAddComponent } from './r-add/r-add.component';
import { RAllComponent } from './r-all/r-all.component';
import { RDeleteComponent } from './r-delete/r-delete.component';
import { REditComponent } from './r-edit/r-edit.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MaterialUiModule} from "../../material-ui/material-ui.module";
import {FormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import { RIndexComponent } from './r-index/r-index.component';
import {MatDatepickerModule} from "@angular/material/datepicker";


@NgModule({
  declarations: [
    RAddComponent,
    RAllComponent,
    RDeleteComponent,
    REditComponent,
    RIndexComponent
  ],
    imports: [
        CommonModule,
        ReservationRoutingModule,
        MatPaginatorModule,
        MatTableModule,
        MaterialUiModule,
        FormsModule,
        FlexLayoutModule,
        MatDatepickerModule
    ]
})
export class ReservationModule { }
