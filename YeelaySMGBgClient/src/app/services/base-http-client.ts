import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseHttpClient {
    /**
     *
     */
    constructor(private http: HttpClient) {


    }

    post<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders;
        observe?: 'body';
        params?: HttpParams;
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        options = {
            headers: new HttpHeaders({
                'Content-type': 'application/json;charset=utf-8'
            })
        };
        return this.http.post<T>(url, body, options);
    }
}