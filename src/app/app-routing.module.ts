import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {HomeComponent} from "./pages/home/home.component";
import {RegisterComponent} from "./pages/register/register.component";
import {SigninComponent} from "./pages/signin/signin.component";

const routes: Routes = [
  {
  path:'',
  component : HomeComponent
  },
  {
  path : 'register',
  component : RegisterComponent
  },
  {
    path : 'signin',
    component : SigninComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module')
      .then(m => m.AdminModule) // Sert a l'activer une fois chargé
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
