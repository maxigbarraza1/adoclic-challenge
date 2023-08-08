import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { IAuthApiService } from './auth-api.interface';
import { IApiRequestUserAuth } from './models/user-auth-api.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements IAuthApiService {
  userMatch: IApiRequestUserAuth = {
    email: 'user@demo.com',
    password: '123456',
  };

  tokenExample = '1234567890';

  constructor(
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) {}

  login(email: string, password: string) {
    if (email != this.userMatch.email)
      return of({ error: 'Email is not valid' });
    if (password != this.userMatch.password)
      return of({ error: 'Password is not valid' });
    this._localStorageService.setItem('token', this.tokenExample);
    return of({ success: true });
  }

  logout(): void {
    this._localStorageService.removeItem('token');
    this._router.navigate(['/auth/login']);
  }
}
