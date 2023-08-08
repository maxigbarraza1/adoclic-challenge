import { Observable } from 'rxjs';

export interface IAuthApiService {
  login(email: string, password: string): Observable<any>;
  logout(): void;
}
