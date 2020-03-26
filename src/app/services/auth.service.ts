import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { tap, catchError, map } from 'rxjs/internal/operators';

import { environment } from 'src/environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { User } from 'models/auth.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.apiUrl}/auth`;
  private url = `${environment.apiUrl}`;
  private token: string = null;
  private authenticated = new BehaviorSubject(false);

  public user: User = null;
  public signUpFormData: Partial<User> = null;

  public get accessToken(): string | null {
    if (!this.token) {
      this.token = this.ls.getItem('accessToken');
    }
    return this.token;
  }

  public set accessToken(token: string | null) {
    if (token === null) {
      this.ls.removeItem('accessToken');
      this.token = null;
    } else {
      this.ls.setItem('accessToken', token);
      this.token = token;
    }
  }

  constructor(private http: HttpClient, private ls: LocalStorageService) {}

  public isAuthenticated() {
    return this.authenticated.asObservable();
  }

  public signUp(userData: User) {
    return this.http.post<{ access_token: string }>(`${this.baseUrl}/signup/`, userData);
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signin/`, {login: username, password: password }).pipe(
      tap(user => {
        if (user && user.access_token) {
          this.accessToken = user.access_token;
          this.authenticated.next(true);
        }
      }),
      map(data => {
        const user = new User(data);
        this.user = user;
        localStorage.setItem('id_token', this.user['auth']['id_token']);
        return user;
      }),
    );
  }

  public genericgetapi (url) {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('id_token'))
    return this.http.get(url, {headers: headers});
  }

  public whoAmI(): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+ localStorage.getItem('id_token'))
    console.log('getting whoAmi')
    return this.http.get<User>(`${this.baseUrl}/whoami/`, {headers: headers}).pipe(
        tap(user => {
          this.authenticated.next(true);
          this.user = new User(user);
        }),
        catchError((error: HttpErrorResponse) => {
          this.accessToken = null;
          this.authenticated.next(false);
          this.user = null;
          return throwError(error);
        }),
    );
  }

  public logout() {
    return this.http.post(`${this.baseUrl}/logout/`, null).pipe(
      tap(() => {
        this.user = null;
        this.accessToken = null;
        this.authenticated.next(false);
      }),
    );
  }
}
