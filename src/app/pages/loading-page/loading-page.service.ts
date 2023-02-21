import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingPageService {
  private count = 0;
  private loadingObs = new BehaviorSubject(<string>('')) ;

  constructor() { }

  getLoadingObs() : Observable<string>{
    return this.loadingObs.asObservable() ;
  }

  requestStarted() : void{
    if(++this.count === 1){
      this.loadingObs.next('start') ;
    }
  }

  requestEnded() : void{
    if(this.count === 0 || --this.count === 0){
      this.loadingObs.next('stop') ;
    }
  }

  resetLoading() : void{
    this.count = 0 ;
    this.loadingObs.next('stop') ;
  }

}
