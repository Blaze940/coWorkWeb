import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  {
    path: '', component  : IndexComponent
  },
  {
    path: 'edit', component  : EditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CprofilRoutingModule { }
