import { Injectable } from '@angular/core';
import {
 HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  apiKey:string = environment.apiKey;
  constructor() { 

  }
  intercept(req:HttpRequest<any>,next:HttpHandler){
    const authReq = req.clone({
      headers: new HttpHeaders().set('user-key',this.apiKey)
    });
    return next.handle(authReq);
  }
}
