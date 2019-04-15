
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService, CategoryService } from './shared-services/shared-services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';

//Material Component Imports
import {MatCardModule, MatButtonModule, MatMenuModule, MatIconModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    BookDetailsComponent,
    NewsPaperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [BooksService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
