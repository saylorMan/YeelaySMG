import { Injectable } from '@angular/core';
import { ResponseResult } from '../../models/response-result'
import { Observable } from 'rxjs/Observable';
import { LoginViewModel } from '../../viewmodels/login.viewmodel';
import { BaseHttpClient } from '../base-http-client';

@Injectable()
export class AccountService {

    constructor(private http: BaseHttpClient) { }

    login(login:LoginViewModel): Observable<ResponseResult> {
    return this.http.post<ResponseResult>('/api/Account/Login',JSON.stringify(login));
    }
}