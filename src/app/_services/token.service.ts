import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router) { }

  saveToken(token : string) : void {
    localStorage.setItem('token', token);
  }
  isLogged() : boolean {
    // !! permet de convertir une valeur en boolean
    // une string vaudra donc 1 ou 0 si vide
    return !!localStorage.getItem('token');
  }
  clearToken() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']) ;
  }
  clearTokenExpired() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['auth']) ;
  }
  getToken() : string | null {
    return localStorage.getItem('token') ;
  }
}

