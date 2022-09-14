import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EditComponent} from "./edit/edit.component";
import {IndexComponent} from "./index/index.component";

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
export class ProfilRoutingModule { }
