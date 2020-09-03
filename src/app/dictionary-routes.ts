import { Routes } from '@angular/router';

export const RoutesDictionary: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '/calculette-cash-flow',
    loadChildren: () => import('src/app/views/users/login/login.module').then(m => m.LoginModule),
  }
]
