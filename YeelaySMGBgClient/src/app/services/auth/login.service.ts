import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { AccountService } from 'app/services/account/account.service';
import { Router } from '@angular/router';
import { ResponseResult } from '../../models/response-result'
import { LoginViewModel } from '../../viewmodels/login.viewmodel';
@Injectable()
export class LoginService {
  isLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

/**
 *
 */
constructor(private account:AccountService,private router: Router,) {

}

  login(login:LoginViewModel) {
    this.account.login(login).subscribe(resp =>{
     if(resp.result){
       this.isLoggedIn = true;
       let redirect = this.redirectUrl?this.redirectUrl:'/main';
       this.router.navigate([redirect]);
     } else{
       this.isLoggedIn = false;
     }
   });
    
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}