import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import {MaterialUiModule} from "../material-ui/material-ui.module";
import { CsettingsComponent } from './csettings/csettings.component';
import { CheaderComponent } from './cheader/cheader.component';
import { ClayoutComponent } from './clayout/clayout.component';
import {FormsModule} from "@angular/forms";
import { SpaceComponent } from './space/space.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    MaintenanceComponent,
    CsettingsComponent,
    CheaderComponent,
    ClayoutComponent,
    SpaceComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialUiModule,
    FormsModule,
    FlexLayoutModule
  ]
})
export class ClientModule { }
