import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  title = "Co'Work";
  desc =
    'Travaillez ensemble, partagez des compétences, communiquez et développez-vous ensemble';
  bookableTable = [] ;

  constructor(private http : HttpClient) {
    this.getBookables().subscribe(
      (bookables: any) => {
        console.log(bookables);
        this.bookableTable = bookables ;
      });
  }
  getBookables() {
    return this.http.get('http://localhost:5000/API/bookable');
  }

  getDayFromDate(date: Date) {
    let day = date.getDay();
    switch (day) {
      case 0:
        return 'SUNDAY';
      case 1:
        return 'MONDAY';
      case 2:
        return 'TUESDAY';
      case 3:
        return 'WEDNESDAY';
      case 4:
        return 'THURSDAY';
      case 5:
        return 'FRIDAY';
      case 6:
        return 'SATURDAY';
    }
    return 'error';
  }
}
