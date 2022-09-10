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
    console.log(uid) ;

    this.http.delete('http://localhost:5000/API/user/'+uid).subscribe(
      (user: any) => {
        this.lastname = user.lastname;
        this.surname = user.surname;
        console.log('User with id : '+uid+' has been deleted');
      }
      );
  }


}
