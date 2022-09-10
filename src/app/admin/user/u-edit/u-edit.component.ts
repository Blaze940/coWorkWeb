import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../../_interfaces/user";

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {
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
    this.http.get('http://localhost:5000/API/user/id/'+uid).subscribe(
      (user: any) => {
        console.log(user);
        //preset userForm with user data
        this.userForm = user ;
        this.userForm.id = user._id;
        });

  };



  onSubmit(){
    console.log(this.userForm);
    this.http.put('http://localhost:5000/API/user/id/'+this.userForm.id, this.userForm).subscribe(
      (user: any) => {
        console.log(user);
      });
  }
}

