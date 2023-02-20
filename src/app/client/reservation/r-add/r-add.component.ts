import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../../_services/user.service";
import {UtilitiesService} from "../../../_services/utilities.service";


@Component({
  selector: 'app-r-add',
  templateUrl: './r-add.component.html',
  styleUrls: ['./r-add.component.css']
})
export class RAddComponent implements OnInit {
  reservationForm   = {
    id : 0,
    day : '',
    date : new Date(),
    space : 'BASTILLE' || 'ITALIE' || 'ODEON' || 'REPUBLIC',
    userOn : '',
    product : '',
    start : 8 || 12 || 18,
    end : '23',
    isBooked : false
  }
  bookables : any[] = [] ;
  valProduct : string[] = [] ;
  valDay : string[] = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'] ;
  valSpace : string[] = ['BASTILLE', 'ITALIE', 'ODEON', 'REPUBLIC'] ;

  constructor(private activated: ActivatedRoute,
              private http : HttpClient,
              private us : UserService,
              private uts : UtilitiesService
  ){
    this.http.get('http://localhost:5000/API/bookable/').subscribe(
      (bookables: any) => {
        console.log(bookables);
        this.bookables = bookables ;
        this.bookables.forEach((bookable)=>{
          this.valProduct.push(bookable.name);
        })
      },
      (error) => {
        console.log(error);
      });

    this.reservationForm.userOn = this.us.currentUserEmail ;
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
   // set automatically reservation day from choice of mat date picker and put it in uppercase
    this.reservationForm.day = this.uts.getDayFromDate(this.reservationForm.date) ;

    console.log(this.reservationForm);
    this.reservationForm.isBooked = true ;
    this.http.post('http://localhost:5000/API/reservation/', this.reservationForm).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      })
  }
}
