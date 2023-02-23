import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-u-delete',
  templateUrl: './u-delete.component.html',
  styleUrls: ['./u-delete.component.css']
})
export class UDeleteComponent implements OnInit {
  lastname: string = '';
  surname: string = '';
  constructor(private activated : ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit(): void {
    let uid = this.activated.snapshot.paramMap.get('uid') ;

    this.http.delete('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user/'+uid).subscribe(
      (user: any) => {
        this.lastname = user.lastname;
        this.surname = user.surname;

      }
      );
  }


}
