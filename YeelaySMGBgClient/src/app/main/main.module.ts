import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import {MainRoutingModule} from './main-routing.module';

import {NavMenuComponent} from './navmenu/navmenu.component';
import {ProductComponent} from './product/product.component';
import {ContactComponent} from './contact/contact.component';
@NgModule({
imports:[
    CommonModule,
    FormsModule,
    MainRoutingModule
],
exports:[
    NavMenuComponent
],
declarations:[
    NavMenuComponent,
    ProductComponent,
    ContactComponent
],
providers:[]
})
export class MainModule{}