import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UIndexComponent} from "../user/u-index/u-index.component";
import {UEditComponent} from "../user/u-edit/u-edit.component";
import {UAddComponent} from "../user/u-add/u-add.component";
import {UDeleteComponent} from "../user/u-delete/u-delete.component";
import {UAllComponent} from "../user/u-all/u-all.component";
import {SAllComponent} from "./s-all/s-all.component";
import {SEditComponent} from "./s-edit/s-edit.component";
import {SAddComponent} from "./s-add/s-add.component";
import {SDeleteComponent} from "./s-delete/s-delete.component";

const routes: Routes = [
  {
    path: '', component  : SAllComponent
  },
  {
    path: 'edit/:uid', component  : SEditComponent
  },
  {
    path: 'add', component  :SAddComponent
  },
  {
    path:'delete/:uid', component : SDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
