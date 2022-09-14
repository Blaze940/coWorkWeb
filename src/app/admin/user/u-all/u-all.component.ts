import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {UserService} from "../../../_services/user.service";
import {IUser} from "../../../_interfaces/user";

@Component({
  selector: 'app-u-all',
  templateUrl: './u-all.component.html',
  styleUrls: ['./u-all.component.css']
})
export class UAllComponent implements OnInit {

  displayedColumns = ['id', 'surname', 'lastname','address','email','role','action'];
  userList : any[][] = [];
  // userAction : string = 'edit' || 'delete';
  dataSource : any ;

  constructor(private http : HttpClient, private router : Router,private us : UserService) {
    const currentUserEmail = this.us.getCurrentUserEmail() ;
    let positionSuppr = 0 ;
    this.http.get('http://localhost:5000/API/user').subscribe(
      (users: any) => {
        //console.log(users);
        //console.log(users[0]);
        this.userList.push(users);

        //Enlever le user principale pour eviter qu'on le delete
        for(let user of this.userList){
          console.log("User boucle : "+ user) ;
          for(let key of user ){
            console.log("champ : "+key.email ) ;
            if(key.email === currentUserEmail){
              this.userList[positionSuppr].splice(positionSuppr,1) ;
              console.log("Bien supprimé") ;
            }
          }
          positionSuppr++ ;
        }
        //console.log("Liste de user : "+ this.userList[0][0].email) ;
        this.dataSource = new MatTableDataSource(this.userList[0]);
        //set userAction to edit
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.log(error);
      }
    );
    this.us.setAllUser() ;
    //console.log((this.us.getTabUser())) ;
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined ;

  ngOnInit(): void {
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    // this.dataSource.paginator = this.paginator;
  }

  sendTo(action: string = 'edit' || 'delete', user: any ) : void{
    this.router.navigate([`/admin/user/${action}/${user._id}`])
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }
}
