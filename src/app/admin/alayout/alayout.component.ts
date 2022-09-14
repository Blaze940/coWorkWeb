import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-alayout',
  templateUrl: './alayout.component.html',
  styleUrls: ['./alayout.component.css']
})
export class AlayoutComponent implements OnInit {
  role : string ='ADMIN' ;
  lastname : string = '';
  surname : string = '';

  constructor(private router : Router, private tokenService : TokenService,private us : UserService, private http : HttpClient) {
    this.http.get('http://localhost:5000/API/user/email/'+this.us.currentUserEmail).subscribe(
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
