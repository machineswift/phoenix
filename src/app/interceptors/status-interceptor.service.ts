import {HttpErrorResponse, HttpInterceptorFn,} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {throwError} from "rxjs";

export const StatusInterceptor: HttpInterceptorFn = (request,
                                                     next) => {
  // 在这里可以修改请求，例如添加 headers
  const modifiedReq = request.clone({
    headers: request.headers.append('Custom-Header', 'Header-Value')
  });

  return next(modifiedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      // 在这里可以处理响应错误
      if (error.status === 401) {
        // 处理未授权错误
        window.location.href = 'iam/auth/login';
      }
      return throwError(() => error)
    })
  );

};
