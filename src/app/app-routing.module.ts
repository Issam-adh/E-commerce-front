import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './guards/auth.guard';
import { AddCategoryComponent } from './home/category/add-category/add-category.component';
import { CategoryComponent } from './home/category/category.component';
import { EditCategoryComponent } from './home/category/edit-category/edit-category.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './home/layout/layout.component';
import { OrdersComponent } from './home/orders/orders.component';
import { ProductsComponent } from './home/products/products.component';
import { SubcategoryComponent } from './home/subcategory/subcategory.component';
import { AddUserComponent } from './home/users/add-user/add-user.component';
import { EditUserComponent } from './home/users/edit-user/edit-user.component';
import { UsersComponent } from './home/users/users.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",component:HomeComponent, children:[
    {path:"", component:LayoutComponent},
    {path:"users", component:UsersComponent},
    {path:"orders", component:OrdersComponent},
    {path:"products", component:ProductsComponent},
    {path:"Category", component:CategoryComponent},
    {path:"addCategory", component:AddCategoryComponent},
    {path:"addUser", component:AddUserComponent},
    {path:"editCategory/:id", component:EditCategoryComponent},
    {path:"editUser/:id", component:EditUserComponent},
    {path:"SubCategory", component:SubcategoryComponent},
  ]},
  {path:"**",component:ErrorComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
