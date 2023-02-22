import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../_services/user.service";

@Component({
  selector: 'app-csettings',
  templateUrl: './csettings.component.html',
  styleUrls: ['./csettings.component.css']
})
export class CsettingsComponent implements OnInit {

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
    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/email/'+this.us.currentUserEmail).subscribe(
      (user: any) => {

        //preset userForm with user data
        this.userForm.id = user._id;
        console.log("id : " +this.userForm.id) ;
      });

  };



  onSubmit(){


    this.http.put('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/id/'+this.userForm.id, this.userForm.password).subscribe(
      (user: any) => {
        return user;
      });
  }
}
