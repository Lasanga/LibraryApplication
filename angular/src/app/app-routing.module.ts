import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OlaLeafComponent } from './ola-leaf/ola-leaf.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { GovernmentPublicationComponent } from './government-publication/government-publication.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
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
    path: "olaleaf", 
    component: OlaLeafComponent
  },
  {
    path: "books", 
    component: BooksComponent,
  },
  {
    path: "bookDetails", 
    component: BookDetailsComponent,
    canActivate: [AuthGuard],
    data: {roles: 'Admin'}
  },
  {
    path: "newspapers", 
    component: NewsPaperComponent
  },
  {
    path: "gvtpub", 
    component: GovernmentPublicationComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
