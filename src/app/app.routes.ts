import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/welcome'
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
