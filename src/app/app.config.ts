import {routes} from './app.routes';
import {FormsModule} from '@angular/forms';
import zh from '@angular/common/locales/zh';
import {provideRouter} from '@angular/router';
import {provideNzIcons} from 'ng-zorro-antd/icon';
import {registerLocaleData} from '@angular/common';
import {provideHttpClient} from '@angular/common/http';
import {zh_CN, provideNzI18n} from 'ng-zorro-antd/i18n';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom
} from '@angular/core';

import {
  CiCircleOutline,
  DashboardOutline,
  FormOutline,
  InfoCircleOutline,
  InfoCircleTwoTone,
  LockOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  OneToOneOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';

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
        OneToOneOutline,
        UserOutline,
      ]),
    provideNzI18n(zh_CN),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
    provideHttpClient()
  ]
};
