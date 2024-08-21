import {Injectable} from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable()
export class WebStatusInterceptor implements HttpInterceptor {

  constructor(private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 在这里可以修改请求，例如添加 headers
    const modifiedReq = req.clone({
      headers: req.headers.append('Custom-Header', 'Header-Value')
    });

    return next.handle(modifiedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // 在这里可以处理响应错误
        if (error.status === 401) {
          // 处理未授权错误
          this.router.navigate(['iam/auth/login']).then(r => {

            console.log("导航到登录页面");
          });
        }
        return throwError(() => error)
      })
    );
  }
}
