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


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    AheaderComponent,
    AboutComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        MatButtonModule,
        MatPaginatorModule,
        MatTableModule,
        HttpClientModule,
        MaterialUiModule,
        FlexLayoutModule
    ]
})
export class AdminModule { }
