import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-r-delete',
  templateUrl: './r-delete.component.html',
  styleUrls: ['./r-delete.component.css']
})
export class RDeleteComponent implements OnInit {

  reservationId : string = '';
  constructor(private activated : ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.activated.params.subscribe((params) => {
      this.reservationId = params['uid'];
      this.deleteReservation() ;
  },
    (error) => {
      console.log(error);
    });
  };

  deleteReservation(){
    this.http.delete(`https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/reservation/del/${this.reservationId}`).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
