import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  bastille: any[] = [];
  italie: any[] = [];
  odeon: any[] = [];
  republique: any[] = [];


  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/API/space/name/BASTILLE').subscribe(
      (space: any) => {
        console.log(space[0]);
        this.bastille = space;
        console.log(this.bastille);
      });
    this.http.get('http://localhost:5000/API/space/name/ITALIE').subscribe(
      (space: any) => {
        console.log(space[0]);
        this.italie = space;
        console.log(this.italie);
      }
    );
    this.http.get('http://localhost:5000/API/space/name/ODEON').subscribe(
      (space: any) => {
        console.log(space[0]);
        this.odeon = space;
        console.log(this.odeon);
      });
    this.http.get('http://localhost:5000/API/space/name/REPUBLIQUE').subscribe(
      (space: any) => {
        console.log(space[0]);
        this.republique = space;
        console.log(this.republique);
      }
    );


  }

  getMaxLaptop(space: string) {
    if (space == 'BASTILLE') {
      return this.bastille[0].maxLaptop;
    }
    if (space == 'ITALIE') {
      return this.italie[0].maxLaptop;
    }
    if (space == 'ODEON') {
      return this.odeon[0].maxLaptop;
    }
    if (space == 'REPUBLIC') {
      return this.republique[0].maxLaptop;
    }
  }

  getMaxLivingRoom(space: string) {
    if (space == 'BASTILLE') {
      return this.bastille[0].maxLivingRoom;
    }
    if (space == 'ITALIE') {
      return this.italie[0].maxLivingRoom;
    }
    if (space == 'ODEON') {
      return this.odeon[0].maxLivingRoom;
    }
    if (space == 'REPUBLIQUE') {
      return this.republique[0].maxLivingRoom;
    }
  }

  getMaxMeetingRoom(space: string) {
    if (space == 'BASTILLE') {
      return this.bastille[0].maxMeetingRoom;
    }
    if (space == 'ITALIE') {
      return this.italie[0].maxMeetingRoom;
    }
    if (space == 'ODEON') {
      return this.odeon[0].maxMeetingRoom;
    }
    if (space == 'REPUBLIQUE') {
      return this.republique[0].maxMeetingRoom;
    }
  }

  getMaxCallingRoom(space: string) {
    if (space == 'BASTILLE') {
      return this.bastille[0].maxCallingRoom;
    }
    if (space == 'ITALIE') {
      return this.italie[0].maxCallingRoom;
    }
    if (space == 'ODEON') {
      return this.odeon[0].maxCallingRoom;
    }
    if (space == 'REPUBLIQUE') {
      return this.republique[0].maxCallingRoom;
    }

  }
  getSpace(space: string) {
    if (space == 'BASTILLE') {
      return this.bastille;
    }
    if (space == 'ITALIE') {
      return this.italie;
    }
    if (space == 'ODEON') {
      return this.odeon;
    }
    if (space == 'REPUBLIQUE') {
      return this.republique;
    }
    return ;
  }
}

