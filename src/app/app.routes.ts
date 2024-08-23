import {Routes} from '@angular/router';
import {TempComponent} from "./temp/temp.component";

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
  },
  {
    path: 'temp',
    component: TempComponent
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.routes')
      .then(m => m.WELCOME_ROUTES)
  },
  {
    path: 'iam',
    loadChildren: () => import('./iam/iam.routes')
      .then(m => m.IAM_ROUTES)
  }
];
