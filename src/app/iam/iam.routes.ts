import {Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";

export const IAM_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];
