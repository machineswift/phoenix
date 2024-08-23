import {routes} from './app.routes';
import {FormsModule} from '@angular/forms';
import zh from '@angular/common/locales/zh';
import {provideRouter} from '@angular/router';
import {provideNzIcons} from 'ng-zorro-antd/icon';
import {registerLocaleData} from '@angular/common';
import {zh_CN, provideNzI18n} from 'ng-zorro-antd/i18n';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http';
import {ApplicationConfig, provideZoneChangeDetection, importProvidersFrom} from '@angular/core';

import {
  CiCircleOutline,
  DashboardOutline,
  FileWordOutline,
  FormOutline,
  InfoCircleOutline,
  InfoCircleTwoTone,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  NotificationOutline,
  OneToOneOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';
import {CookieInterceptor} from "./interceptors/cookie-interceptor.interceptor";
import {UrlInterceptor} from "./interceptors/url-interceptor.interceptor";
import {StatusInterceptor} from "./interceptors/status-interceptor.interceptor";


registerLocaleData(zh);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideNzIcons(
      [
        CiCircleOutline,
        DashboardOutline,
        FormOutline,
        InfoCircleOutline,
        InfoCircleTwoTone,
        FileWordOutline,
        LockOutline,
        MenuFoldOutline,
        MenuUnfoldOutline,
        NotificationOutline,
        OneToOneOutline,
        UserOutline,
      ]),
    provideNzI18n(zh_CN),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClient(withInterceptors([UrlInterceptor, CookieInterceptor, StatusInterceptor]))
  ],
};
