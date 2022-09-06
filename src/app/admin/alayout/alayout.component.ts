import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../_services/token.service";

@Component({
  selector: 'app-alayout',
  templateUrl: './alayout.component.html',
  styleUrls: ['./alayout.component.css']
})
export class AlayoutComponent implements OnInit {

  constructor(private tokenService : TokenService) { }

  ngOnInit(): void {
  }

  logout() {
    this.tokenService.clearToken();
    //Plus tard pour gerer admin et client
    //localStorage.removeItem('role');
  }

}
