import {Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {UserComponent} from "./user/user/user.component";

export const IAM_ROUTES: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'user/user',
    component: UserComponent
  }
];
