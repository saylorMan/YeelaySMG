import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }          from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule, HttpClient,HttpParams} from '@angular/common/http';


import {MainModule} from './main/main.module';

import { AppComponent } from './app.component';
import{AppRoutingModule} from './app-routing.module';

import { PageNotFoundComponent }   from './not-found.component';
import{LoginComponent} from './login/login.component';
import{MainComponent} from './main/main.component';

import {AuthGuard} from './auth/auth-guard-login.service';
import { LoginService }      from './services/auth/login.service';
import { AccountService } from './services/account/account.service';
import { BaseHttpClient } from './services/base-http-client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    LoginService,
    HttpClient,
    BaseHttpClient,    
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
