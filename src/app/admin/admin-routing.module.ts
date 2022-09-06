import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlayoutComponent} from "./alayout/alayout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: '', component  : AlayoutComponent, children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {
        //Comme user est un module il faut le charger avec loadChildren
        path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'about', component : AboutComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
