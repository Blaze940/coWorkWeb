import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../_interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-u-add',
  templateUrl: './u-add.component.html',
  styleUrls: ['./u-add.component.css']
})
export class UAddComponent implements OnInit {

  userForm  : IUser = {
    id : 0,
    pseudo: '',
    email: '',
    password: '',
    role: 'CLIENT',
    mealTray: '63011c45985ae79b708fa016',
    booked: [],
    participations: [],
    surname: '',
    lastname: '',
    address: '',
    card: '6303b059c2f74e896047234e',
    isStudent: false,
    dateSubscription: new Date(),
    hasPaid: false,
    dateLastPayment: new Date(),
    dateEndSubscription: new Date(),
    dateRenewal: new Date()
  }

  constructor(private activated: ActivatedRoute,
              private http : HttpClient,
              private us : UserService
  ){
  }

  ngOnInit(): void {

    // let uid : number = this.us.getCurrentId() ;

    //---------------------------------------
    // this.http.get('http://localhost:5000/API/user/email/'+this.us.currentUserEmail).subscribe(
    //   (user: any) => {
    //     console.log(user);
    //     //preset userForm with user data
    //     this.userForm = user ;
    //     this.userForm.id = user._id;
    //   });

  };



  onSubmit(){
    console.log(this.userForm);
    this.http.post('http://localhost:5000/API/user/signup', this.userForm).subscribe(
      (user: any) => {
        console.log(user);
      });
  }
}
