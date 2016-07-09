import { RouterConfig } from '@angular/router';
import { HomeComponent } from './index';
import {AuthGuard} from '../shared/services/auth/auth.guard';

export const HomeRoutes: RouterConfig = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
];
