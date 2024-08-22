import {Routes} from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {UserPageComponent} from "./user/user-page/user-page.component";
import {DepartmentComponent} from "./department/department.component";
import {UserDetailComponent} from "./user/user-detail/user-detail.component";
import {UserUpdateComponent} from "./user/user-update/user-update.component";

export const IAM_ROUTES: Routes = [
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'user/user-page',
    component: UserPageComponent
  },
  {
    path: 'user/user-update',
    component: UserUpdateComponent
  },
  {
    path: 'user/user-detail',
    component: UserDetailComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  }
];
