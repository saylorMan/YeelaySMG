import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { AuthGuard } from '../auth/auth-guard-login.service';

const MainRoutes: Routes = [
    {

        path: 'main',
        component: MainComponent,
        canActivate: [AuthGuard],//使用数组，可用多个守卫吗？
        children: [
            {
                path: 'contact',
                component: ContactComponent
            },
            {
                path: 'product',
                component: ProductComponent
            }
        ]
    }
];


@NgModule({
    imports: [
        RouterModule.forChild(MainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
