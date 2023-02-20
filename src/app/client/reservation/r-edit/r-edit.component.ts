import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../_interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-r-edit',
  templateUrl: './r-edit.component.html',
  styleUrls: ['./r-edit.component.css']
})
export class REditComponent implements OnInit {

  userForm : IUser = {
    id : 0,
    pseudo: '',
    email: '',
    password: '',
    role: '',
    mealTray: '',
    booked: [],
    participations: [],
    surname: '',
    lastname: '',
    address: '',
    card: '',
    isStudent: false,
    dateSubscription: new Date(),
    hasPaid: false,
    dateLastPayment: new Date(),
    dateEndSubscription: new Date(),
    dateRenewal: new Date()
  }
  constructor(private activated: ActivatedRoute,
              private http : HttpClient,
  ){
  }

  ngOnInit(): void {
    let uid = this.activated.snapshot.paramMap.get('uid') ;
    console.log(uid) ;


    //---------------------------------------
    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/id/'+uid).subscribe(
      (user: any) => {
        console.log(user);
        //preset userForm with user data
        this.userForm = user ;
        this.userForm.id = user._id;
      });

  };



  onSubmit(){
    console.log(this.userForm);
    this.http.put('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/id/'+this.userForm.id, this.userForm).subscribe(
      (user: any) => {
        console.log(user);
      });
  }
}
