import { Component, OnInit } from '@angular/core';
import {SpaceService} from "../../../_services/space.service";
import {ReservationService} from "../../../_services/reservation.service";

@Component({
  selector: 'app-r-index',
  templateUrl: './r-index.component.html',
  styleUrls: ['./r-index.component.css']
})
export class RIndexComponent implements OnInit {

  constructor(private spaceSpace : SpaceService, private reservationService : ReservationService) {

  }

  ngOnInit(): void {
  }

}
