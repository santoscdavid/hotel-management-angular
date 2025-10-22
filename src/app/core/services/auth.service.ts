import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

interface LoginResponse {
  token: string;
  expiresIn: number;
  user: any;
}

@Injectable()
export class AuthService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly USER_KEY = 'auth_user';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private api: ApiService) {}

  login(credentials: { email: string; password: string }): Observable<LoginResponse> {
    const mockResponse: LoginResponse = {
      token: 'mock-jwt-token-123456',
      expiresIn: 3600,
      user: {
        id: 1,
        name: 'Usuário de Teste',
        email: credentials.email,
      },
    };

    return of(mockResponse).pipe(
      delay(800),
      tap((response) => this.setSession(response))
    );

    // TODO: Implementar futuramente
    // return this.api.post<LoginResponse>('auth/login', credentials).pipe(
    //   tap((res) => {
    //     this.setSession(res);
    //   })
    // );
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUser(): any | null {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  private setSession(authResult: LoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, authResult.token);
    localStorage.setItem(this.USER_KEY, JSON.stringify(authResult.user));
    this.isAuthenticatedSubject.next(true);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
}
