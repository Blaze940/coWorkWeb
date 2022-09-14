import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UserService} from "../../../_services/user.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-s-all',
  templateUrl: './s-all.component.html',
  styleUrls: ['./s-all.component.css']
})
export class SAllComponent implements OnInit {
  displayedColumns = ['id', 'name', 'localisation','services','maxLaptop','action'];
  spaceList : any[][] = [];
  // userAction : string = 'edit' || 'delete';
  dataSource : any ;

  constructor(private http : HttpClient, private router : Router) {

    this.http.get('http://localhost:5000/API/space').subscribe(
      (spaces: any) => {
        console.log(spaces);
        //console.log(users[0]);
        this.spaceList.push(spaces);
        this.dataSource = new MatTableDataSource(this.spaceList[0]);
        //set userAction to edit
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }) ;
  }

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined ;

  ngOnInit(): void {
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    // this.dataSource.paginator = this.paginator;
  }

  sendTo(action: string = 'edit' || 'delete', space: any ) : void{
    this.router.navigate([`/admin/space/${action}/${space._id}`])
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }
}
