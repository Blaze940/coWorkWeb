import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";
import {UserService} from "../../_services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-alayout',
  templateUrl: './alayout.component.html',
  styleUrls: ['./alayout.component.css']
})
export class AlayoutComponent implements OnInit {
  role : string ='ADMIN' ;

  constructor(private router : Router, private tokenService : TokenService,private us : UserService) {

  }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.clearToken();
    //Plus tard pour gerer admin et client
    //localStorage.removeItem('role');
  }

}
