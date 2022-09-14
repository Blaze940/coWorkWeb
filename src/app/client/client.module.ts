import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import {MaterialUiModule} from "../material-ui/material-ui.module";


@NgModule({
  declarations: [
    MaintenanceComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialUiModule
  ]
})
export class ClientModule { }
