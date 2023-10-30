import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Storage } from '../storage/storage';
// import { TokenStorage } from "./token-storage.service";

@Injectable({
  providedIn: 'root',
})
export class Factory {
  public apiUrl;
  private _headers = {
    Authorization: `Bearer ${this.storage.getAccessToken()}`,
  };

  constructor(
    public storage: Storage,
    public http: HttpClient // public _tokenStorage: TokenStorage
  ) {
    this.apiUrl = environment.apiUrl;
  }

  public get<Type = any>(endPoint: string, options?: object): Observable<Type> {
    return this.http.get<any>(`${this.apiUrl}/${endPoint}`, {
      headers: {
        Authorization: `Bearer ${this.storage.getAccessToken()}`,
      },
      ...options,
    });
  }

  public post(endPoint: string, data: {}, options?: object): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${endPoint}`, data, {
      headers: {
        Authorization: `Bearer ${this.storage.getAccessToken()}`,
      },
      ...options,
    });
  }

  public put(endPoint: string, elements: {}, options?: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${endPoint}`, elements, {
      headers: this._headers,
      ...options,
    });
  }

  public patch(endPoint: string, elements: {}, options?: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${endPoint}`, elements, {
      headers: this._headers,
      ...options,
    });
  }

  public delete(endPoint: string, options?: object): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${endPoint}`, {
      headers: this._headers,
      ...options,
    });
  }
}
