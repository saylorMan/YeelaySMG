import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const productRoutes:Routes=[
    {path:'products',},
    {path:'products/id',}
];
@NgModule({
imports:[],
exports:[]
})
export class ProductRoutingModule{}