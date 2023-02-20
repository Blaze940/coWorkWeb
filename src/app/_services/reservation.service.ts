import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservationUrl = 'https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/reservation';
  reservations : any[] = [] ;

  constructor(private http : HttpClient) {
    this.http.get(this.reservationUrl).subscribe(
      (reservations : any) => {
        console.log(reservations);
        this.reservations = reservations ;
      }
    )
  }
  getReservationsBySpace(space : string){
    let tmpTab : any[] = [] ;
    this.reservations.forEach((reservation)=>{
      if (reservation.space === space){
        tmpTab.push(reservation);
      }
    })
    return tmpTab ;
  }
}
