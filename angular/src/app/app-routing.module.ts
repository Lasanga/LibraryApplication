// import { BookDetailsLibrarianComponent } from './book-details-librarian/book-details-librarian.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { BookComponent } from './book/book.component';
import { ForeignerApprovalComponent } from './foreigner-approval/foreigner-approval.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { RareCollectionComponent } from './rare-collection/rare-collection.component';
import { GovernmentPublicationComponent } from './government-publication/government-publication.component';
import { OlaLeafComponent } from './ola-leaf/ola-leaf.component';
import { BooksRareComponent } from './rare-collection/books/books-rare.component';
import { NewspapersRareComponent } from './rare-collection/newspapers/newspapers-rare.component';
import { GovernmentPublicationsRareComponent } from './rare-collection/government-publications/government-publications-rare.component';
import { OlaLeafRareComponent } from './rare-collection/ola-leaf/ola-leaf-rare.component';

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
    path: "newsPaper",
    component: NewsPaperComponent
  },
  {
    path: "govPublication",
    component: GovernmentPublicationComponent
  },
  {
    path: "olaLeaf",
    component: OlaLeafComponent
  },
  {
    path: "foreignerApproval",
    component: ForeignerApprovalComponent
  },
  {
    path: "rareCollection",
    component: RareCollectionComponent
  },
  {
    path: "rareBooks",
    component: BooksRareComponent
  },
  {
    path: "rareNewspapers",
    component: NewspapersRareComponent
  },
  {
    path: "rareGvtPub",
    component: GovernmentPublicationsRareComponent
  },
  {
    path: "rareOla",
    component: OlaLeafRareComponent
  },
  {
    path: "404NotFound",
    component: NotFound404Component
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
