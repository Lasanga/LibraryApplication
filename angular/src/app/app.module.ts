import { BookDetailsComponent } from './book-details-admin/book-details.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BooksService, CategoryService, OlaLeafsService } from './shared-services/shared-services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BooksComponent } from './books/books.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { LayoutComponent } from './layout/layout.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth-interceptor';
import { OlaLeafComponent } from './ola-leaf/ola-leaf.component';
import { GovernmentPublicationComponent } from './government-publication/government-publication.component';

	//Material Component Imports
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule,
    MatCardModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatRippleModule, MatSelectModule,
    MatRadioModule, MatOptionModule,MatDialogModule} from "@angular/material";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OlaEditComponent } from './ola-edit/ola-edit.component';
import { NewsPaperEditComponent } from './news-paper-edit/news-paper-edit.component';
import { GovernmentPublicationEditComponent } from './government-publication-edit/government-publication-edit.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { NewsPaperDetailsComponent } from './news-paper-details-admin/news-paper-details.component';
import { NewsPaperDetailsUserComponent } from './news-paper-details-user/news-paper-details-user.component';
import { NewsPaperDetailsLibrarianComponent } from './news-paper-details-librarian/news-paper-details-librarian.component';
import { OlaLeafDetailsUserComponent } from './ola-leaf-details-user/ola-leaf-details-user.component';
import { OlaLeafDetailsLibrarianComponent } from './ola-leaf-details-librarian/ola-leaf-details-librarian.component';
import { OlaLeafDetailsAdminComponent } from './ola-leaf-details-admin/ola-leaf-details-admin.component';
import { GovernmentPublicationDetailsUserComponent } from './government-publication-details-user/government-publication-details-user.component';
import { GovernmentPublicationDetailsLibrarianComponent } from './government-publication-details-librarian/government-publication-details-librarian.component';
import { GovernmentPublicationDetailsAdminComponent } from './government-publication-details-admin/government-publication-details-admin.component';
import { BookDetailsUserComponent } from './book-details-user/book-details-user.component';
import { BookDetailsLibrarianComponent } from './book-details-librarian/book-details-librarian.component';


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
    OlaLeafComponent,
    RegisterComponent,
    HomeComponent,
    GovernmentPublicationComponent,
    OlaEditComponent,
    NewsPaperEditComponent,
    GovernmentPublicationEditComponent,
    BookEditComponent,
    NewsPaperDetailsComponent,
    NewsPaperDetailsUserComponent,
    NewsPaperDetailsLibrarianComponent,
    OlaLeafDetailsUserComponent,
    OlaLeafDetailsLibrarianComponent,
    OlaLeafDetailsAdminComponent,
    GovernmentPublicationDetailsUserComponent,
    GovernmentPublicationDetailsLibrarianComponent,
    GovernmentPublicationDetailsAdminComponent,
    BookDetailsUserComponent,
    BookDetailsLibrarianComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
    MatSelectModule,
    MatRadioModule,
    FormsModule,
    MatOptionModule,
    MatRadioModule,
    MatDialogModule,

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
  bootstrap: [AppComponent],
  entryComponents: [OlaEditComponent,NewsPaperEditComponent,GovernmentPublicationEditComponent,BookEditComponent]
})
export class AppModule { }
