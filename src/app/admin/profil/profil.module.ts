import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from "@angular/forms";
import {MaterialUiModule} from "../../material-ui/material-ui.module";


@NgModule({
  declarations: [
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    FormsModule,
    MaterialUiModule
  ]
})
export class ProfilModule { }
