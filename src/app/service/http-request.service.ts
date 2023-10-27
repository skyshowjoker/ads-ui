import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environment/environment';
const API_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  get(url: string, params?: any): Observable<any> {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          httpParams = httpParams.set(key, params[key]);
        }
      }
    }

    return this.http.get(API_URL + url, { params: httpParams, observe: 'response' }).pipe(
      catchError(this.handleError)
    );
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(API_URL + url, data).pipe(
      catchError(this.handleError)
    );
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(API_URL + url, data).pipe(
      catchError(this.handleError)
    );
  }

  delete(url: string): Observable<any> {
    return this.http.delete(API_URL + url).pipe(
      catchError(this.handleError)
    );
  }
}






