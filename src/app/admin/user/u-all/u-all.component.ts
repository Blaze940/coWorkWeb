import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import {UserService} from "../../../_services/user.service";


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

  constructor(private http : HttpClient, private router : Router,private us : UserService) {
    //console.log((this.us.getTabUser())) ;
  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined ;

  ngOnInit(): void {
    let positionSuppr = 0 ;
    let tmpTab : any[] = [] ;
    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/user').subscribe(
      (users: any) => {
        //
        //
        tmpTab.push(users);

        //Enlever le user principale pour eviter qu'on le delete
        for(let user of tmpTab){
          console.log("User boucle : "+ user) ;
          for(let key of user ){
            console.log("champ : "+key.email ) ;
            if(key.email == this.us.currentUserEmail){
              tmpTab[0].splice(positionSuppr,1) ;
              console.log("Bien supprimé") ;
            }
            positionSuppr++ ;
          }
        }
        this.userList.push(tmpTab);
        //console.log("Liste de user : "+ this.userList[0][0].email) ;
        this.dataSource = new MatTableDataSource(this.userList[0][0]);
        //set userAction to edit
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
          return error;
      }
    );
    // setTimeout(() => this.dataSource.paginator = this.paginator);
    // this.dataSource.paginator = this.paginator;
  }

  sendTo(action: string = 'edit' || 'delete', user: any ) : void{
    this.router.navigate([`/admin/user/${action}/${user._id}`])
      .then(r => console.log(r))
      .catch(e => console.log(e));
  }
}
