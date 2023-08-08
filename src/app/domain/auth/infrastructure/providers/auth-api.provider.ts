import { InjectionToken, Provider } from '@angular/core';
import { IAuthApiService } from '../auth-api.interface';
import { AuthApiService } from '../auth-api.service';

export const HTTP_AUTH_SERVICE = new InjectionToken<IAuthApiService>(
  'ProductsAuthService'
);

export const AUTH_API_PROVIDER: Provider = {
  provide: HTTP_AUTH_SERVICE,
  useClass: AuthApiService,
};
