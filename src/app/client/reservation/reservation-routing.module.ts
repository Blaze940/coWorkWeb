import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RAllComponent} from "./r-all/r-all.component";
import {REditComponent} from "./r-edit/r-edit.component";
import {RAddComponent} from "./r-add/r-add.component";
import {RDeleteComponent} from "./r-delete/r-delete.component";
import {RIndexComponent} from "./r-index/r-index.component";

const routes: Routes = [
  {
    path: '', component  : RIndexComponent
  },
  {
    path: 'all', component  : RAllComponent
  },
  {
    path: 'edit/:uid', component  : REditComponent
  },
  {
    path: 'add', component  : RAddComponent
  },
  {
    path:'delete/:uid', component : RDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReservationRoutingModule { }
