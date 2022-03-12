import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GuardsComponent } from './guards/guards.component';
import { LayoutComponent } from './home/layout/layout.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { UsersComponent } from './home/users/users.component';
import { ProductsComponent } from './home/products/products.component';
import { CategoryComponent } from './home/category/category.component';
import { SubcategoryComponent } from './home/subcategory/subcategory.component';
import { OrdersComponent } from './home/orders/orders.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddCategoryComponent } from './home/category/add-category/add-category.component';
import { EditCategoryComponent } from './home/category/edit-category/edit-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './home/users/add-user/add-user.component';
import { EditUserComponent } from './home/users/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    GuardsComponent,
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    ProductsComponent,
    CategoryComponent,
    SubcategoryComponent,
    OrdersComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddUserComponent,
    EditUserComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
