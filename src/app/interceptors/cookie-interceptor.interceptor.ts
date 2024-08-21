import {
  HttpInterceptorFn
} from '@angular/common/http';


export const CookieInterceptor: HttpInterceptorFn = (request,
                                                     next) => {

  // 创建一个新的请求，并设置 withCredentials 为 true
  const requestWithCredentials = request.clone({withCredentials: true});

  // 在这里实现拦截逻辑
  return next(requestWithCredentials);
};
