import { Component, OnInit } from '@angular/core';
import {UtilitiesService} from "../../services/utilities.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title : string ;
  desc : string ;
  constructor(private uts : UtilitiesService) {
    this.title = this.uts.title;
    this.desc = this.uts.desc;
  }

  ngOnInit(): void {
  }

}
