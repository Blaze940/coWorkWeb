import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router : Router, private us : UserService) { }

  saveToken(token : string) : void {
    localStorage.setItem('token', token);
    // this.router.navigate(['admin']);
  }
  isLogged() : boolean {
    // !! permet de convertir une valeur en boolean
    // une string vaudra donc 1 ou 0 si vide
    return !!localStorage.getItem('token');
  }
  clear(){
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.us.currentUserEmail = null ;
  }
  clearToken() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.us.currentUserEmail = null ;
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

