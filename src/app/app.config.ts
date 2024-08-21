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
  FormOutline,
  InfoCircleOutline,
  InfoCircleTwoTone,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline, NotificationOutline,
  OneToOneOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';
import {CookieInterceptor} from "./interceptors/cookie-interceptor.service";
import {UrlInterceptor} from "./interceptors/url-interceptor.service";
import {StatusInterceptor} from "./interceptors/status-interceptor.service";


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
    provideHttpClient(withInterceptors([UrlInterceptor, CookieInterceptor,StatusInterceptor]))
  ]
};
