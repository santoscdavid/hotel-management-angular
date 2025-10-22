import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    });
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => error);
  }

  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}/${endpoint}`, {
        headers: this.getHeaders(),
        params,
      })
      .pipe(catchError(this.handleError));
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.http
      .post<T>(`${this.baseUrl}/${endpoint}`, body, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.http
      .put<T>(`${this.baseUrl}/${endpoint}`, body, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.http
      .delete<T>(`${this.baseUrl}/${endpoint}`, {
        headers: this.getHeaders(),
      })
      .pipe(catchError(this.handleError));
  }
}
