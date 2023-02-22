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
  };



  onSubmit(){

    this.http.post('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/signup', this.userForm).subscribe(
      (user: any) => {
        return user;
      },
      (error) => {
        return error;
      });
  }
}
