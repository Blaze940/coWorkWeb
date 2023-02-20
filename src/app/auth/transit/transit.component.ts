import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.css']
})
export class TransitComponent implements OnInit {

  constructor(private http : HttpClient, private router : Router ,private us : UserService) { }

  ngOnInit(): void {

  }
  sendTo(page:string){

    this.router.navigate([page]);
  }


}
