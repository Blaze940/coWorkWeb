import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'app-u-all',
  templateUrl: './u-all.component.html',
  styleUrls: ['./u-all.component.css']
})
export class UAllComponent implements OnInit {

  displayedColumns = ['id', 'surname', 'lastname','address','email','role','action'];
  userList : any[] = [];
  // userAction : string = 'edit' || 'delete';
  dataSource : any ;

  constructor(private http : HttpClient, private router : Router) {
    this.http.get('http://localhost:5000/API/user').subscribe(
      (users: any) => {
        console.log(users);
        this.userList.push(users);
        this.dataSource = new MatTableDataSource(this.userList[0]);
        //set userAction to edit

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

  sendTo(action: string = 'edit' || 'delete', user: any ) : void{
    this.router.navigate([`/admin/user/${action}/${user._id}`])
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }
}
