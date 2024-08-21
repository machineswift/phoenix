import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CookieInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // 创建一个新的请求，并设置 withCredentials 为 true
    const requestWithCredentials = req.clone({withCredentials: true});

    // 继续执行请求
    return next.handle(requestWithCredentials);
  }

}
