import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {IReservation} from "../../../_interfaces/reservation";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-r-all',
  templateUrl: './r-all.component.html',
  styleUrls: ['./r-all.component.css']
})
export class RAllComponent implements OnInit {
  displayedColumns = ['product','space','userOn','day','start','end','start','action'];
  reservationList : IReservation[] = [];
  // reservationAction : string = 'edit' || 'delete';
  dataSource : any ;

  constructor(private http : HttpClient, private router : Router,private us : UserService) {

  }
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator | undefined ;

  ngOnInit(): void {
    let tmpTab : any[] = [] ;
    // get my reservations
    this.http.get('https://europe-west1-cloud-esgi-coworkapp.cloudfunctions.net/gcloud_function_cowork/API/reservation').subscribe(
      (reservations: any) => {

        this.reservationList = reservations ;
        this.reservationList.forEach((reservation)=>{
          if (reservation.userOn === this.us.currentUserEmail){
            tmpTab.push(reservation);
          }
        })
        this.dataSource = new MatTableDataSource(tmpTab);
        this.dataSource.paginator = this.paginator;
      }
    );

    // setTimeout(() => this.dataSource.paginator = this.paginator);
    // this.dataSource.paginator = this.paginator;
  }
  refresh(){
    this.ngOnInit();
  }

  sendTo(action: string = 'edit' || 'delete', reservation: any ) : void{
    this.router.navigate([`/client/reservation/${action}/${reservation._id}`])
      .then(r => r)
      .catch(e => e);
  }
}
