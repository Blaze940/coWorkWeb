import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';

import {TokenService} from "../_services/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService : TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //console.log(request) ;

    const token = this.tokenService.getToken() ;
    if(token){
      let clone = request.clone({
        setHeaders : {
          Authorization : `Bearer ${token}`
        }
      });
      console.log(clone) ;
      return next.handle(clone).pipe(
        catchError((error) => {
          console.log(error) ;
          if(error.status === 401){
            this.tokenService.clearTokenExpired() ;
          }
          return throwError("Session expired !" ) ;
        })
      );

    }

    return next.handle(request);
  }
}

export const TokenInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}
