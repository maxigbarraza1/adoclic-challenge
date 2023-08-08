import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthApiService } from '../infrastructure/auth-api.interface';
import { HTTP_AUTH_SERVICE } from '../infrastructure/providers/auth-api.provider';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(HTTP_AUTH_SERVICE)
    private _authApiService: IAuthApiService
  ) {}

  login(email: string, password: string): Observable<any> {
    return this._authApiService.login(email, password);
  }

  logout(): void {
    return this._authApiService.logout();
  }
}
