import {Routes} from '@angular/router';
import {UserComponent} from "./iam/user/user/user.component";
import {AaaaComponent} from "./aaaa/aaaa.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    path: 'aaa',
    component: AaaaComponent
  },
  {
    path: 'iam',
    loadChildren: () => import('./iam/iam.routes')
      .then(m => m.IAM_ROUTES)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.routes')
      .then(m => m.WELCOME_ROUTES)
  }
];
