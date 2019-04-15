import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OlaLeafComponent } from './ola-leaf/ola-leaf.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "olaleaf", component: OlaLeafComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
