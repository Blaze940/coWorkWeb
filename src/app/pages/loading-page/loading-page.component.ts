import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LoadingPageService} from "./loading-page.service";

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  showLoading = false;
  constructor(private loadingService : LoadingPageService, private cdRef : ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.init() ;
  }

  init() {
    this.loadingService.getLoadingObs().subscribe((status : string) => {
      if(status === 'start'){
        this.showLoading = true ;
      }else{
        this.showLoading = false ;
      }
      this.cdRef.detectChanges() ;
    }) ;

  }

}
