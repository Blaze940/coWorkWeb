import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClayoutComponent} from "./clayout/clayout.component";
import {CsettingsComponent} from "./csettings/csettings.component";
import {SpaceComponent} from "./space/space.component";

const routes: Routes = [
  { path: '', component  : ClayoutComponent, children: [
      {path: '', redirectTo: 'profil', pathMatch: 'full'},
      {
        //Comme user est un module il faut le charger avec loadChildren
        path: 'reservation', loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationModule)
      },
      {
        //Comme user est un module il faut le charger avec loadChildren
        path: 'profil', loadChildren: () => import('./cprofil/cprofil.module').then(m => m.CprofilModule)
      },

      {
        path: 'settings', component : CsettingsComponent
      },
      {
        path: 'space', component : SpaceComponent
      }
    ]
  }
  // {
  //   path: '' , component : MaintenanceComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
