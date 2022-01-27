import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let token = localStorage.getItem('theToken')
    if(token){
      request = request.clone({
        headers:request.headers.set("Authorization",`bearer${token}`)
      })
    }
    return next.handle(request);
  }
}
