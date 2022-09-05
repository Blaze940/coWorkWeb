import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-u-index',
  templateUrl: './u-index.component.html',
  styleUrls: ['./u-index.component.css']
})
export class UIndexComponent implements OnInit {
  displayedColumns = ['id', 'surname', 'lastname','address','email','role'];
  userList : any[] = [];
  dataSource : any ;

  constructor(private http : HttpClient) {
    this.http.get('http://localhost:5000/API/user').subscribe(
      (users: any) => {
        console.log(users);
        this.userList.push(users);

        this.dataSource = new MatTableDataSource(this.userList[0]);
      },
      (error) => {
        console.log(error);
      }
      //On ne passera jamais ici
      // (error) => {
      //   console.log(error);
      // }
    );
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined ;

  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
  }
}
