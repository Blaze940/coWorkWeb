import { Component, OnInit } from '@angular/core';
import {SpaceService} from "../../_services/space.service";
import {ReservationService} from "../../_services/reservation.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  maxLaptopBastille : number | undefined ;
  maxMeetingRoomBastille : number | undefined ;
  maxCallingRoomBastille : number | undefined ;
  maxLivingRoomBastille : number | undefined ;

  maxLaptopItalie : number | undefined ;
  maxMeetingRoomItalie : number | undefined ;
  maxCallingRoomItalie : number | undefined ;
  maxLivingRoomItalie : number | undefined ;

  maxLaptopOdeon : number | undefined ;
  maxMeetingRoomOdeon : number | undefined ;
  maxCallingRoomOdeon : number | undefined ;
  maxLivingRoomOdeon : number | undefined ;

  maxLaptopRepublique : number | undefined ;
  maxMeetingRoomRepublique : number | undefined ;
  maxCallingRoomRepublique : number | undefined ;
  maxLivingRoomRepublique : number | undefined ;



  constructor(private spaceSpace : SpaceService, private reservationService : ReservationService, private http : HttpClient) {

    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/space').subscribe(
      (spaces: any) => {
        spaces.forEach((space:any)=>{
          if (space.name === 'Bastille'){
            this.maxLaptopBastille = space.maxLaptop;
            this.maxMeetingRoomBastille = space.maxMeetingRoom;
            this.maxCallingRoomBastille = space.maxCallingRoom;
            this.maxLivingRoomBastille = space.maxLivingRoom;
          }
          if (space.name === 'Italie'){
            this.maxLaptopItalie = space.maxLaptop;
            this.maxMeetingRoomItalie = space.maxMeetingRoom;
            this.maxCallingRoomItalie = space.maxCallingRoom;
            this.maxLivingRoomItalie = space.maxLivingRoom;
          }
          if (space.name === 'Odeon'){
            this.maxLaptopOdeon = space.maxLaptop;
            this.maxMeetingRoomOdeon = space.maxMeetingRoom;
            this.maxCallingRoomOdeon = space.maxCallingRoom;
            this.maxLivingRoomOdeon = space.maxLivingRoom;
          }
          if (space.name === 'Republique'){
            this.maxLaptopRepublique = space.maxLaptop;
            this.maxMeetingRoomRepublique = space.maxMeetingRoom;
            this.maxCallingRoomRepublique = space.maxCallingRoom;
            this.maxLivingRoomRepublique = space.maxLivingRoom;
          }
        })
      },
      (error) => {
        console.log(error);
      }
)
  }

  ngOnInit(): void {
  }


    // this.maxLaptopBastille = this.spaceSpace.getMaxLaptop('BASTILLE');
    // this.maxMeetingRoomBastille = this.spaceSpace.getMaxMeetingRoom('BASTILLE');
    // this.maxCallingRoomBastille = this.spaceSpace.getMaxCallingRoom('BASTILLE');
    // this.maxLivingRoomBastille = this.spaceSpace.getMaxLivingRoom('BASTILLE');
    //
    // this.maxLaptopItalie = this.spaceSpace.getMaxLaptop('ITALIE');
    // this.maxMeetingRoomItalie = this.spaceSpace.getMaxMeetingRoom('ITALIE');
    // this.maxCallingRoomItalie = this.spaceSpace.getMaxCallingRoom('ITALIE');
    // this.maxLivingRoomItalie = this.spaceSpace.getMaxLivingRoom('ITALIE');
    //
    // this.maxLaptopOdeon = this.spaceSpace.getMaxLaptop('ODEON');
    // this.maxMeetingRoomOdeon = this.spaceSpace.getMaxMeetingRoom('ODEON');
    // this.maxCallingRoomOdeon = this.spaceSpace.getMaxCallingRoom('ODEON');
    // this.maxLivingRoomOdeon = this.spaceSpace.getMaxLivingRoom('ODEON');
    //
    // this.maxLaptopRepublique = this.spaceSpace.getMaxLaptop('REPUBLIQUE');
    // this.maxMeetingRoomRepublique = this.spaceSpace.getMaxMeetingRoom('REPUBLIQUE');
    // this.maxCallingRoomRepublique = this.spaceSpace.getMaxCallingRoom('REPUBLIQUE');
    // this.maxLivingRoomRepublique = this.spaceSpace.getMaxLivingRoom('REPUBLIQUE');


}
