import { Component, OnInit } from '@angular/core';
import {IUser} from "../../../_interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-s-add',
  templateUrl: './s-add.component.html',
  styleUrls: ['./s-add.component.css']
})
export class SAddComponent implements OnInit {
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
    // this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/email/'+this.us.currentUserEmail).subscribe(
    //   (user: any) => {
    //
    //     //preset userForm with user data
    //     this.userForm = user ;
    //     this.userForm.id = user._id;
    //   });

  };



  onSubmit(){

    this.http.post('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/signup', this.userForm).subscribe(
      (user: any) => {
        return user ;
      },
      (error) => {
        return error ;
      });
  }
}
