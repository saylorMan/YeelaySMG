import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ValidatorFn } from '@angular/forms/src/directives/validators';
import { AbstractControl } from '@angular/forms/src/model';
import { LoginViewModel } from '../viewmodels/login.viewmodel';
import {LoginService} from '../services/auth/login.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    model: any = {};
    loading = false;
    returnUrl: string;
    loginForm: FormGroup;
    loginViewModel:LoginViewModel;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder,
        private loginService:LoginService
    ) {
        this.createForm();
    }

    createForm() {
        this.loginForm = this.formBuilder.group(
            {
                username: ['', [Validators.required, this.isUsernameExist('a')]],
                password: ['', [Validators.required, Validators.minLength(6)]],
            }
        );
    }

    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }


    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    //登录
    onSubmit() {
        let loginViewModel = new LoginViewModel();
        loginViewModel.password = this.password.value;
        loginViewModel.username = this.username.value;
        this.loginService.login(loginViewModel);
    }

    //用户是否存在
    isUsernameExist(_username: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            return control.value == _username ? { "_username": control.value } : null;
        }
    }
}