import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { ProductsComponent } from './../products/products.component';
import { ProductsModule } from './../products/products.module';

const appRoutes: Routes = [
    {path: 'products', component: ProductsComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule, HttpModule, ProductsModule, 
    RouterModule.forRoot(appRoutes, { enableTracing: true }), FormsModule,
  ],
  providers: [ LoginService ]
})
export class LoginModule { }
