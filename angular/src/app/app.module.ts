
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BooksService, CategoryService, OlaLeafsService } from './shared-services/shared-services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { LayoutComponent } from './layout/layout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth-interceptor';
import { OlaLeafComponent } from './ola-leaf/ola-leaf.component';

	//Material Component Imports
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule,
    MatCardModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatRippleModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    BookDetailsComponent,
    NewsPaperComponent,
    LayoutComponent,
    OlaLeafComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem('token')
      }
    })
  ],
  providers: [
    BooksService,
    CategoryService,
    OlaLeafsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
