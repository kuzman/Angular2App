import { RouterConfig } from '@angular/router';
import { AuthGuard, AuthService } from '../shared/services/auth/index';
import { LoginComponent } from './index';

export const LoginRoutes: RouterConfig = [
  {
    path: '**',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const AUTH_PROVIDERS = [AuthGuard, AuthService];
