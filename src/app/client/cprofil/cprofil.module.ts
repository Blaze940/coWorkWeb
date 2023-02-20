import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CprofilRoutingModule } from './cprofil-routing.module';
import { IndexComponent } from './index/index.component';
import { EditComponent } from './edit/edit.component';
import {MatInputModule} from "@angular/material/input";
import {MaterialUiModule} from "../../material-ui/material-ui.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    IndexComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CprofilRoutingModule,
    MatInputModule,
    MaterialUiModule,
    FormsModule
  ]
})
export class CprofilModule { }
