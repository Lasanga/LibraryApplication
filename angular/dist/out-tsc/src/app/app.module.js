import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BooksService, CategoryService, OlaLeafsService, AccountService, AuthorService, NewsPapersService, GovernmentPublicationsService } from './shared-services/shared-services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthInterceptor } from './auth-interceptor';
//Material Component Imports
import { MatToolbarModule, MatSidenavModule, MatListModule, MatButtonModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatFormFieldModule, MatRippleModule, MatSelectModule, MatRadioModule, MatOptionModule, MatDialogModule, MatTableModule, MatTabsModule } from "@angular/material";
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';
import { BookCreateComponent } from './book/book-create/book-create.component';
import { ForeignerApprovalComponent } from './foreigner-approval/foreigner-approval.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { NewsPaperEditComponent } from './news-paper/news-paper-edit/news-paper-edit.component';
import { NewsPaperCreateComponent } from './news-paper/news-paper-create/news-paper-create.component';
import { GovernmentPublicationComponent } from './government-publication/government-publication.component';
import { GovernmentPublicationCreateComponent } from './government-publication/government-publication-create/government-publication-create.component';
import { GovernmentPublicationEditComponent } from './government-publication/government-publication-edit/government-publication-edit.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { RareCollectionComponent } from './rare-collection/rare-collection.component';
import { BooksRareComponent } from './rare-collection/books/books-rare.component';
import { NewspapersRareComponent } from './rare-collection/newspapers/newspapers-rare.component';
import { GovernmentPublicationsRareComponent } from './rare-collection/government-publications/government-publications-rare.component';
import { OlaLeafRareComponent } from './rare-collection/ola-leaf/ola-leaf-rare.component';
import { OlaLeafComponent } from './ola-leaf/ola-leaf.component';
import { OlaLeafEditComponent } from './ola-leaf/ola-leaf-edit/ola-leaf-edit.component';
import { OlaLeafCreateComponent } from './ola-leaf/ola-leaf-create/ola-leaf-create.component';
import { RareBooksEditComponent } from './rare-collection/books/rare-books-edit/rare-books-edit.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                HeaderComponent,
                FooterComponent,
                RegisterComponent,
                HomeComponent,
                BookComponent,
                BookEditComponent,
                BookCreateComponent,
                ForeignerApprovalComponent,
                NewsPaperComponent,
                NewsPaperEditComponent,
                NewsPaperCreateComponent,
                GovernmentPublicationComponent,
                GovernmentPublicationCreateComponent,
                GovernmentPublicationEditComponent,
                NotFound404Component,
                RareCollectionComponent,
                BooksRareComponent,
                NewspapersRareComponent,
                GovernmentPublicationsRareComponent,
                OlaLeafRareComponent,
                OlaLeafComponent,
                OlaLeafEditComponent,
                OlaLeafCreateComponent,
                RareBooksEditComponent,
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
                MatTableModule,
                MatTabsModule,
                JwtModule.forRoot({
                    config: {
                        tokenGetter: function () { return localStorage.getItem('token'); }
                    }
                })
            ],
            providers: [
                BooksService,
                CategoryService,
                AccountService,
                OlaLeafsService,
                AuthorService,
                NewsPapersService,
                GovernmentPublicationsService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                },
            ],
            bootstrap: [AppComponent],
            entryComponents: [BookEditComponent, BookCreateComponent, NewsPaperEditComponent, NewsPaperCreateComponent, GovernmentPublicationCreateComponent,
                GovernmentPublicationEditComponent, OlaLeafEditComponent, OlaLeafCreateComponent, RareBooksEditComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map