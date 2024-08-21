import {Injectable} from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private apiUrl = 'https://your-api-url.com'; // 替换成你的API URL

  constructor(private http: HttpClient) {
  }

  get<T>(endpoint: string, params?: HttpParams | { [param: string]: string | string[] }): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get<T>(url, {params});
  }

  post<T>(endpoint: string, body: any, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    context?: HttpContext,
    observe?: 'body',
    params?: HttpParams | {
      [param: string]: string | string[] | number | boolean | readonly (string | number | boolean)[]
    },
    reportProgress?: boolean,
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer' | 'base64' | 'bytearray',
    withCredentials?: boolean,
    transferCache?: { includeHeaders?: string[] } | boolean
  }): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post<T>(url, body, options);
  }


  put<T>(endpoint: string, body: any, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    context?: HttpContext,
    observe?: 'body',
    params?: HttpParams | {
      [param: string]: string | string[] | number | boolean | readonly (string | number | boolean)[]
    },
    reportProgress?: boolean,
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer' | 'base64' | 'bytearray',
    withCredentials?: boolean,
    transferCache?: { includeHeaders?: string[] } | boolean
  }): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put<T>(url, body, options);
  }

  delete<T>(endpoint: string, options?: {
    headers?: HttpHeaders | { [header: string]: string | string[] },
    context?: HttpContext,
    observe?: 'body',
    params?: HttpParams | {
      [param: string]: string | string[] | number | boolean | readonly (string | number | boolean)[]
    },
    reportProgress?: boolean,
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer' | 'base64' | 'bytearray',
    withCredentials?: boolean,
    transferCache?: { includeHeaders?: string[] } | boolean
  }): Observable<T> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.delete<T>(url, options);
  }

}
