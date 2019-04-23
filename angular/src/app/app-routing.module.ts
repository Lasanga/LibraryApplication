// import { BookDetailsLibrarianComponent } from './book-details-librarian/book-details-librarian.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
import { ForeignerApprovalComponent } from './foreigner-approval/foreigner-approval.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/book',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "book",
    component: BookComponent
  },
  {
    path: "foreignerApproval",
    component: ForeignerApprovalComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
