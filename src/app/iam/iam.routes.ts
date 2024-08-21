import {Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {UserPageComponent} from "./user/user-page/user-page.component";
import {DepartmentComponent} from "./department/department.component";

export const IAM_ROUTES: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'user-page/user-page',
    component: UserPageComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  }
];
