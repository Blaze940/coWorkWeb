import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-s-edit',
  templateUrl: './s-edit.component.html',
  styleUrls: ['./s-edit.component.css']
})
export class SEditComponent implements OnInit {
  spaceForm  = {
    id : 0,
    name: '',
    localisation: '',
    users: [],
    schedule: [],
    activities: [],
    meals: [],
    services: [],
    bookables: [],
    maxMeetingRoom: Number,
    maxCallingRoom: Number,
    maxPrinter: Number,
    maxLaptop: Number,
    maxLivingRoom: Number,
  }
  constructor(private activated: ActivatedRoute,
              private http : HttpClient,
  ){
  }

  ngOnInit(): void {
    let uid = this.activated.snapshot.paramMap.get('uid') ;
    console.log(uid) ;


    //---------------------------------------
    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/space/id/'+uid).subscribe(
      (space: any) => {
        console.log(space);
        //preset spaceForm with space data
        this.spaceForm = space ;
        this.spaceForm.id = space._id;
      });

  };



  onSubmit(){
    console.log(this.spaceForm);
    this.http.put('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/space/id/'+this.spaceForm.id, this.spaceForm).subscribe(
      (space: any) => {
        console.log(space);
      });
  }

}
