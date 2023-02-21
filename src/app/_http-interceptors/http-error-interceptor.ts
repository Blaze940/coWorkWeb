import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {LoadingPageService} from "../pages/loading-page/loading-page.service";


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private loadingPageService : LoadingPageService) {
  }
  intercept(request : HttpRequest<any>, next : HttpHandler) : Observable<HttpEvent<any>>{
    this.loadingPageService.requestStarted() ;
    return this.handler(next, request) ;
  }

  handler(next : HttpHandler, request : HttpRequest<any>) : Observable<HttpEvent<any>>{
    return next.handle(request)
      .pipe(
        tap(
          (event : HttpEvent<any>) => {
            if(event instanceof HttpResponse){
              this.loadingPageService.requestEnded() ;
            }
          },
          (error : HttpErrorResponse) => {
            this.loadingPageService.resetLoading() ;
            throw error ;
          }
        ),
      );
  }

}
