import {HttpInterceptorFn} from '@angular/common/http';

export const cookieInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  // 创建一个新的请求，并设置 withCredentials 为 true
  const requestWithCredentials = req.clone({withCredentials: true});
  return next(requestWithCredentials);
};
