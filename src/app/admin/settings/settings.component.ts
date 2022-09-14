import { Component, OnInit } from '@angular/core';
import {IUser} from "../../_interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  userForm   = {
    id : '' ,
    password: '',
  }

  constructor(private activated: ActivatedRoute,
              private http : HttpClient,
              private us : UserService
  ){
  }

  ngOnInit(): void {

    // let uid : number = this.us.getCurrentId() ;

    //---------------------------------------
    this.http.get('http://localhost:5000/API/user/email/'+this.us.currentUserEmail).subscribe(
      (user: any) => {
        console.log(user);
        //preset userForm with user data
        this.userForm.id = user._id;
        console.log("id : " +this.userForm.id) ;
      });

  };



  onSubmit(){
    console.log("user complet : "+this.userForm);
    console.log("mp : "+this.userForm);
    this.http.put('http://localhost:5000/API/user/id/'+this.userForm.id, this.userForm.password).subscribe(
      (user: any) => {
        console.log(user);
      });
  }

}
