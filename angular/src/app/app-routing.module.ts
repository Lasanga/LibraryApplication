import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OlaLeafComponent } from './ola-leaf/ola-leaf.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: "login", 
    component: LoginComponent
  },
  {
    path: "register", 
    component: RegisterComponent
  },
  {
    path: "olaleaf", 
    component: OlaLeafComponent
  },
  {
    path: "home", 
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
