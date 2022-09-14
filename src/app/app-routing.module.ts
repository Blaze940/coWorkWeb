import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {AuthGuard} from "./_helpers/auth.guard";

const routes: Routes = [
  {
  path:'',
  component : HomeComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule) // Sert a l'activer une fois chargé
    , canActivate: [AuthGuard]
  },
  {
    path: 'client', loadChildren: () => import('./client/client.module')
      .then(m => m.ClientModule) // Sert a l'activer une fois chargé
    , canActivate: [AuthGuard]
  },
  {
    path:'auth', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },

  //A laisse en dernier pour que les autres routes soient trouvées
  {
    path : 'not-found',
    component : NotFoundComponent,
  },
  {
    path : '**',
    redirectTo : 'not-found',
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
