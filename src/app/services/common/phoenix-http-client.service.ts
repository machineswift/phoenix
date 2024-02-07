import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoenixHttpClientService {

  constructor(private http: HttpClient) { }

  // 获取数据的通用方法
  getData<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  // 发送POST请求的方法
  postData<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }
}
