import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../../_services/token.service";
import {UserService} from "../../_services/user.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-clayout',
  templateUrl: './clayout.component.html',
  styleUrls: ['./clayout.component.css']
})
export class ClayoutComponent implements OnInit {
  role : string ='ADMIN' ;
  lastname : string = '';
  surname : string = '';

  constructor(private router : Router, private tokenService : TokenService,private us : UserService, private http : HttpClient) {
    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/email/'+this.us.currentUserEmail).subscribe(
      (user: any) => {
        console.log(user);
        //preset userForm with user data
        this.role = user.role;
        this.lastname = user.lastname ;
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
  //

}
