import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";
import {AuthService} from "../../_services/auth.service";
import {UserService} from "../../_services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-cheader',
  templateUrl: './cheader.component.html',
  styleUrls: ['./cheader.component.css']
})
export class CheaderComponent implements OnInit {
  surname : string = '' ;
  constructor(private tokenService : TokenService, private authService : AuthService, private us :UserService, private http : HttpClient ) {
    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/email/'+this.us.currentUserEmail).subscribe(
      (user: any) => {

        //preset userForm with user data
        this.surname = user.surname ;
      });
  }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.clearToken();
    //Plus tard pour gerer admin et client
    //localStorage.removeItem('role');
  }


}
