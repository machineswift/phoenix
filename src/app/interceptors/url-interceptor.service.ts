import {HttpInterceptorFn} from '@angular/common/http';
import {environment} from "../../environments/environment";

export const UrlInterceptor: HttpInterceptorFn = (request,
                                                     next) => {
  // 获取当前环境的API URL
  const apiUrl = environment.apiUrl;

  // 修改请求的URL
  const modifiedUrlRequest = request.clone({
    url: `${apiUrl}/${request.url}`
  });

  // 在这里实现拦截逻辑
  return next(modifiedUrlRequest);

};

