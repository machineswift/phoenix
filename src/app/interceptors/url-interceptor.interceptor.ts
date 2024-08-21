import { HttpInterceptorFn } from '@angular/common/http';
import {environment} from "../../environments/environment";

export const urlInterceptorInterceptor: HttpInterceptorFn = (req, next) => {

// 获取当前环境的API URL
  const apiUrl = environment.apiUrl;

  // 修改请求的URL
  const modifiedRequest = req.clone({
    url: `${apiUrl}/${req.url}`
  });

  return next(modifiedRequest);
};
