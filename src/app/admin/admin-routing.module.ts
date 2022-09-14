import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlayoutComponent} from "./alayout/alayout.component";
import {AboutComponent} from "./about/about.component";
import {SettingsComponent} from "./settings/settings.component";

const routes: Routes = [
  {
    path: '', component  : AlayoutComponent, children: [
      {path: '', redirectTo: 'space', pathMatch: 'full'},
      {
        //Comme user est un module il faut le charger avec loadChildren
        path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        //Comme user est un module il faut le charger avec loadChildren
        path: 'space', loadChildren: () => import('./space/space.module').then(m => m.SpaceModule)
      },
      {
        //Comme user est un module il faut le charger avec loadChildren
        path: 'profil', loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule)
      },
      {
        path: 'about', component : AboutComponent
      },
      {
        path: 'settings', component : SettingsComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
