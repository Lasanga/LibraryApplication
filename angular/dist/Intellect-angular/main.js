(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _foreigner_approval_foreigner_approval_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./foreigner-approval/foreigner-approval.component */ "./src/app/foreigner-approval/foreigner-approval.component.ts");
/* harmony import */ var _news_paper_news_paper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news-paper/news-paper.component */ "./src/app/news-paper/news-paper.component.ts");
/* harmony import */ var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found404/not-found404.component */ "./src/app/not-found404/not-found404.component.ts");
/* harmony import */ var _rare_collection_rare_collection_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./rare-collection/rare-collection.component */ "./src/app/rare-collection/rare-collection.component.ts");
/* harmony import */ var _government_publication_government_publication_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./government-publication/government-publication.component */ "./src/app/government-publication/government-publication.component.ts");

// import { BookDetailsLibrarianComponent } from './book-details-librarian/book-details-librarian.component';











var routes = [
    {
        path: '',
        redirectTo: '/book',
        pathMatch: 'full'
    },
    {
        path: "login",
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "register",
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    },
    {
        path: "home",
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: "book",
        component: _book_book_component__WEBPACK_IMPORTED_MODULE_6__["BookComponent"]
    },
    {
        path: "newsPaper",
        component: _news_paper_news_paper_component__WEBPACK_IMPORTED_MODULE_8__["NewsPaperComponent"]
    },
    {
        path: "govPublication",
        component: _government_publication_government_publication_component__WEBPACK_IMPORTED_MODULE_11__["GovernmentPublicationComponent"]
    },
    {
        path: "foreignerApproval",
        component: _foreigner_approval_foreigner_approval_component__WEBPACK_IMPORTED_MODULE_7__["ForeignerApprovalComponent"]
    },
    {
        path: "rareCollection",
        component: _rare_collection_rare_collection_component__WEBPACK_IMPORTED_MODULE_10__["RareCollectionComponent"]
    },
    {
        path: "404NotFound",
        component: _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_9__["NotFound404Component"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main{\r\n  padding: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbntcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- <app-footer></app-footer> -->\r\n\r\n<!-- <div class =\"main\">\r\n  <app-ola-leaf></app-ola-leaf>\r\n  <app-government-publication></app-government-publication>\r\n  <app-books></app-books>\r\n  <app-news-paper></app-news-paper>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Intellect';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/auth-interceptor.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./book/book-edit/book-edit.component */ "./src/app/book/book-edit/book-edit.component.ts");
/* harmony import */ var _book_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./book/book-create/book-create.component */ "./src/app/book/book-create/book-create.component.ts");
/* harmony import */ var _foreigner_approval_foreigner_approval_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./foreigner-approval/foreigner-approval.component */ "./src/app/foreigner-approval/foreigner-approval.component.ts");
/* harmony import */ var _news_paper_news_paper_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./news-paper/news-paper.component */ "./src/app/news-paper/news-paper.component.ts");
/* harmony import */ var _news_paper_news_paper_edit_news_paper_edit_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./news-paper/news-paper-edit/news-paper-edit.component */ "./src/app/news-paper/news-paper-edit/news-paper-edit.component.ts");
/* harmony import */ var _news_paper_news_paper_create_news_paper_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./news-paper/news-paper-create/news-paper-create.component */ "./src/app/news-paper/news-paper-create/news-paper-create.component.ts");
/* harmony import */ var _government_publication_government_publication_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./government-publication/government-publication.component */ "./src/app/government-publication/government-publication.component.ts");
/* harmony import */ var _government_publication_government_publication_create_government_publication_create_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./government-publication/government-publication-create/government-publication-create.component */ "./src/app/government-publication/government-publication-create/government-publication-create.component.ts");
/* harmony import */ var _government_publication_government_publication_edit_government_publication_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./government-publication/government-publication-edit/government-publication-edit.component */ "./src/app/government-publication/government-publication-edit/government-publication-edit.component.ts");
/* harmony import */ var _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./not-found404/not-found404.component */ "./src/app/not-found404/not-found404.component.ts");
/* harmony import */ var _rare_collection_rare_collection_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rare-collection/rare-collection.component */ "./src/app/rare-collection/rare-collection.component.ts");
/* harmony import */ var _rare_collection_books_books_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./rare-collection/books/books.component */ "./src/app/rare-collection/books/books.component.ts");
/* harmony import */ var _rare_collection_newspapers_newspapers_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./rare-collection/newspapers/newspapers.component */ "./src/app/rare-collection/newspapers/newspapers.component.ts");
/* harmony import */ var _rare_collection_government_publications_government_publications_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./rare-collection/government-publications/government-publications.component */ "./src/app/rare-collection/government-publications/government-publications.component.ts");
/* harmony import */ var _rare_collection_ola_leaf_ola_leaf_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./rare-collection/ola-leaf/ola-leaf.component */ "./src/app/rare-collection/ola-leaf/ola-leaf.component.ts");














//Material Component Imports



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_17__["BookComponent"],
                _book_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_18__["BookEditComponent"],
                _book_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_19__["BookCreateComponent"],
                _foreigner_approval_foreigner_approval_component__WEBPACK_IMPORTED_MODULE_20__["ForeignerApprovalComponent"],
                _news_paper_news_paper_component__WEBPACK_IMPORTED_MODULE_21__["NewsPaperComponent"],
                _news_paper_news_paper_edit_news_paper_edit_component__WEBPACK_IMPORTED_MODULE_22__["NewsPaperEditComponent"],
                _news_paper_news_paper_create_news_paper_create_component__WEBPACK_IMPORTED_MODULE_23__["NewsPaperCreateComponent"],
                _government_publication_government_publication_component__WEBPACK_IMPORTED_MODULE_24__["GovernmentPublicationComponent"],
                _government_publication_government_publication_create_government_publication_create_component__WEBPACK_IMPORTED_MODULE_25__["GovernmentPublicationCreateComponent"],
                _government_publication_government_publication_edit_government_publication_edit_component__WEBPACK_IMPORTED_MODULE_26__["GovernmentPublicationEditComponent"],
                _not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_27__["NotFound404Component"],
                _rare_collection_rare_collection_component__WEBPACK_IMPORTED_MODULE_28__["RareCollectionComponent"],
                _rare_collection_books_books_component__WEBPACK_IMPORTED_MODULE_29__["BooksComponent"],
                _rare_collection_newspapers_newspapers_component__WEBPACK_IMPORTED_MODULE_30__["NewspapersComponent"],
                _rare_collection_government_publications_government_publications_component__WEBPACK_IMPORTED_MODULE_31__["GovernmentPublicationsComponent"],
                _rare_collection_ola_leaf_ola_leaf_component__WEBPACK_IMPORTED_MODULE_32__["OlaLeafComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: function () { return localStorage.getItem('token'); }
                    }
                })
            ],
            providers: [
                _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__["BooksService"],
                _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__["CategoryService"],
                _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__["AccountService"],
                _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__["OlaLeafsService"],
                _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__["AuthorService"],
                _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__["NewsPapersService"],
                _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_9__["GovernmentPublicationsService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                    useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_13__["AuthInterceptor"],
                    multi: true
                },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_book_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_18__["BookEditComponent"], _book_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_19__["BookCreateComponent"], _news_paper_news_paper_edit_news_paper_edit_component__WEBPACK_IMPORTED_MODULE_22__["NewsPaperEditComponent"], _news_paper_news_paper_create_news_paper_create_component__WEBPACK_IMPORTED_MODULE_23__["NewsPaperCreateComponent"], _government_publication_government_publication_create_government_publication_create_component__WEBPACK_IMPORTED_MODULE_25__["GovernmentPublicationCreateComponent"], _government_publication_government_publication_edit_government_publication_edit_component__WEBPACK_IMPORTED_MODULE_26__["GovernmentPublicationEditComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth-interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth-interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        if (this.authService.isAuthenticated()) {
            var accessToken = JSON.parse(this.authService.getToken()).access_token;
            var token = "Bearer " + accessToken;
            var authReq = req.clone({ headers: req.headers.set("Authorization", token) });
            return next.handle(authReq);
        }
        return next.handle(req);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
        this.url = 'http://localhost:5000/connect/token';
    }
    AuthService.isAuthenticated = function () {
        throw new Error("Method not implemented.");
    };
    AuthService.prototype.authenticate = function (username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': 'http://localhost:4200' });
        var body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', "password");
        body.set('client_id', "js");
        body.set('client_secret', "secret");
        return this.http.post(this.url, body.toString(), {
            headers: headers
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (jwt) {
            if (jwt && jwt.access_token) {
                localStorage.setItem('token', JSON.stringify(jwt));
                localStorage.setItem('username', username);
                return true;
            }
        }));
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.getToken = function () {
        return this.jwtHelper.tokenGetter();
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/book/book-create/book-create.component.css":
/*!************************************************************!*\
  !*** ./src/app/book/book-create/book-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-half-width{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib29rL2Jvb2stY3JlYXRlL2Jvb2stY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoiYXBwL2Jvb2svYm9vay1jcmVhdGUvYm9vay1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhhbGYtd2lkdGh7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/book/book-create/book-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/book/book-create/book-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create Book</h1>\r\n<form class=\"example-form\" (ngSubmit)=\"onSubmit(book)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"isbnNumber\" type=\"text\" [(ngModel)]=\"book.isbnNumber\" required name=\"isbnNumber\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"DisplayName\" type=\"text\" [(ngModel)]=\"book.displayName\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"totalPages\" type=\"number\" [(ngModel)]=\"book.totalPages\" required name=\"totalPages\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"publisher\" type=\"text\" [(ngModel)]=\"book.publisher\" name=\"publisher\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"book.price\" name=\"price\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Category</p>\r\n      <mat-select [(ngModel)]=\"book.categoryId\" name=\"categoryId\">\r\n        <mat-option *ngFor=\"let category of categories\" [value]=category.id>{{category.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Author</p>\r\n      <mat-select [(ngModel)]=\"book.authorId\" name=authorId>\r\n        <mat-option *ngFor=\"let author of authors\" [value]=author.id>{{author.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"mt-3\">\r\n    <button class=\"btn btn btn-danger mr-3\" (click)=\"onNoClick()\">Close</button>\r\n    <button type=\"submit\" class=\"btn btn btn-success\">Save</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/book/book-create/book-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/book/book-create/book-create.component.ts ***!
  \***********************************************************/
/*! exports provided: BookCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookCreateComponent", function() { return BookCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(dialogRef, token, _bookService, _authorService, _categoryService) {
        this.dialogRef = dialogRef;
        this.token = token;
        this._bookService = _bookService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.authors = [];
        this.categories = [];
        this.book = new _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["BookInputDto"]();
        this.canEditSrc = false;
    }
    BookCreateComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BookCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
    };
    BookCreateComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._bookService.createBook(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    BookCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__(/*! ./book-create.component.html */ "./src/app/book/book-create/book-create.component.html"),
            styles: [__webpack_require__(/*! ./book-create.component.css */ "./src/app/book/book-create/book-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book/book-edit/book-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/book/book-edit/book-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-half-width{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib29rL2Jvb2stZWRpdC9ib29rLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJhcHAvYm9vay9ib29rLWVkaXQvYm9vay1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oYWxmLXdpZHRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/book/book-edit/book-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/book/book-edit/book-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit Book {{book.data.displayName}}</h1>\r\n<form class=\"example-form\" (ngSubmit)=\"onSubmit(book.data)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"isbnNumber\" type=\"text\" [(ngModel)]=\"book.data.isbnNumber\" required\r\n          name=\"isbnNumber\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"DsiplayName\" type=\"text\" [(ngModel)]=\"book.data.displayName\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"totalPages\" type=\"number\" [(ngModel)]=\"book.data.totalPages\" required\r\n          name=\"totalPages\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"publisher\" type=\"text\" [(ngModel)]=\"book.data.publisher\" name=\"publisher\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"book.data.price\" required name=\"price\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\" *ngIf=\"canType\">\r\n      <p class=\"mat-small\">Source Type</p>\r\n      <mat-select [(ngModel)]=\"book.data.sourceType\" name=\"sourceType\">\r\n        <mat-option [value]=10>Public</mat-option>\r\n        <mat-option [value]=20>Rare</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Category</p>\r\n      <mat-select [(ngModel)]=\"book.data.category.id\" name=\"id\">\r\n        <mat-option *ngFor=\"let category of categories\" [value]=category.id>{{category.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Author</p>\r\n      <mat-select [(ngModel)]=\"book.data.author.id\" name=id>\r\n        <mat-option *ngFor=\"let author of authors\" [value]=author.id>{{author.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"mt-3\">\r\n    <button class=\"btn btn btn-danger mr-3\" (click)=\"onNoClick()\">Close</button>\r\n    <button type=\"submit\" class=\"btn btn btn-success\">Save</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/book/book-edit/book-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/book/book-edit/book-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: BookEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookEditComponent", function() { return BookEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var BookEditComponent = /** @class */ (function () {
    function BookEditComponent(dialogRef, book, _bookService, _authorService, _categoryService, jwtHelper) {
        this.dialogRef = dialogRef;
        this.book = book;
        this._bookService = _bookService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.jwtHelper = jwtHelper;
        this.authors = [];
        this.categories = [];
        this.canType = false;
    }
    BookEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BookEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (decodeToken['permission'].includes("books.rare"))
            this.canType = true;
    };
    BookEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._bookService.updateBook(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    BookEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__(/*! ./book-edit.component.html */ "./src/app/book/book-edit/book-edit.component.html"),
            styles: [__webpack_require__(/*! ./book-edit.component.css */ "./src/app/book/book-edit/book-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_3__["BookUpdateDto"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_3__["BooksService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_3__["AuthorService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\r\n    background-image: url('https://via.placeholder.com/150C/O https://placeholder.com/');\r\n    background-size: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ib29rL2Jvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9GQUFvRjtJQUNwRixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MEMvTyBodHRwczovL3BsYWNlaG9sZGVyLmNvbS8nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-2\" style=\"margin-bottom: 10px;\">\r\n        <button *ngIf=\"canEdit\" class=\"btn btn-block btn-outline-primary\" (click)=\"openCreate()\">Create New</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 mb-3\" *ngFor=\"let book of bookOutputDto\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <div style=\"width: 100%\">\r\n            <mat-select style=\"width: 30%; float: right;\" *ngIf=\"canEdit\" (selectionChange)=\"option($event.value)\">\r\n              <mat-option [value]=\"book\">Edit</mat-option>\r\n              <mat-option [value]=\"book.id\" *ngIf=\"canDelete\">Delete</mat-option>\r\n            </mat-select>\r\n          </div>\r\n\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <p><small>#{{book.category.displayName}}</small></p>\r\n          <h4>{{book.displayName}}</h4>\r\n          <h6>Rs. {{ book.price }}</h6>\r\n          <mat-divider></mat-divider><br />\r\n          <span style=\"font-size: 12px;\">{{book.author.displayName}}</span><br />\r\n          <small>\r\n              {{book.author.emailAddress}}\r\n          </small> \r\n            \r\n          <i><strong></strong></i>\r\n\r\n          <p style=\"text-align:right\">{{book.totalPages}} Pages</p>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-edit/book-edit.component */ "./src/app/book/book-edit/book-edit.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _book_create_book_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-create/book-create.component */ "./src/app/book/book-create/book-create.component.ts");







var BookComponent = /** @class */ (function () {
    function BookComponent(jwtHelper, _bookService, dialog) {
        this.jwtHelper = jwtHelper;
        this._bookService = _bookService;
        this.dialog = dialog;
        this.bookOutputDto = [];
        this.canEdit = false;
        this.canDelete = false;
        this.isForeign = false;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getAll().subscribe(function (res) {
            _this.bookOutputDto = res;
        });
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (!decodeToken) {
            return false;
        }
        if (decodeToken['permission'].includes("books.edit"))
            this.canEdit = true;
        if (decodeToken['permission'].includes("books.delete"))
            this.canDelete = true;
        if (decodeToken['role'] == 'ForeignUser')
            this.isForeign = true;
    };
    BookComponent.prototype.option = function (element) {
        var _this = this;
        if (!isNaN(element)) {
            this._bookService.deleteBook(element).subscribe(function (res) {
                _this.ngOnInit();
            });
        }
        else {
            this.openDialog(element);
        }
    };
    BookComponent.prototype.openDialog = function (book) {
        var dialogRef = this.dialog.open(_book_edit_book_edit_component__WEBPACK_IMPORTED_MODULE_4__["BookEditComponent"], {
            width: '800px',
            data: { data: book }
        });
    };
    BookComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(_book_create_book_create_component__WEBPACK_IMPORTED_MODULE_6__["BookCreateComponent"], {
            width: '800px'
        });
    };
    BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtHelperService"],
            _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["BooksService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer {\r\n    height: 100px;\r\n    width: 100%;\r\n    background-color: rgb(110, 110, 110);\r\n    bottom: 0;\r\n    position: relative;\r\n    margin-top: 80px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsU0FBUztJQUNULGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZm9vdGVyIHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTAsIDExMCwgMTEwKTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\r\n    \r\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/foreigner-approval/foreigner-approval.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/foreigner-approval/foreigner-approval.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 70%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9mb3JlaWduZXItYXBwcm92YWwvZm9yZWlnbmVyLWFwcHJvdmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0VBQ1oiLCJmaWxlIjoiYXBwL2ZvcmVpZ25lci1hcHByb3ZhbC9mb3JlaWduZXItYXBwcm92YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/foreigner-approval/foreigner-approval.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/foreigner-approval/foreigner-approval.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<table class=\"col-10\" style=\"margin: 0 auto; border: 1px solid lightgrey;\" class=\"table table-striped\">\r\n  <thead>\r\n    <tr style=\"font-weight: bold;\">\r\n      <td width=\"40%\">Username</td>\r\n      <td width=\"50%\">Email</td>\r\n      <td width=\"10%\">Options</td>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let foreign of foreignOutputDto\">\r\n      <td>{{ foreign.userName }}</td>\r\n      <td>{{ foreign.email }}</td>\r\n      <td>\r\n        <button class=\"btn btn-block btn-outline-success\" (click)=\"_onApproved( foreign.id )\">Approve</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/foreigner-approval/foreigner-approval.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/foreigner-approval/foreigner-approval.component.ts ***!
  \********************************************************************/
/*! exports provided: ForeignerApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForeignerApprovalComponent", function() { return ForeignerApprovalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");



// export interface PeriodicElement {
//   username: string;
//   email: string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [];
var ForeignerApprovalComponent = /** @class */ (function () {
    // dataSource = this.foreignOutputDto;
    function ForeignerApprovalComponent(_accountService) {
        this._accountService = _accountService;
        // displayedColumns: string[] = ['userName', 'email', 'isActive'];
        this.foreignOutputDto = [];
    }
    ForeignerApprovalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._accountService.getForiegners().subscribe(function (res) {
            _this.foreignOutputDto = res;
        });
        // console.log(this.foreignOutputDto);
    };
    ForeignerApprovalComponent.prototype._onApproved = function (id) {
        this._accountService.addForiegner(id).subscribe(function (res) {
            location.reload();
        });
        // console.log(id);
    };
    ForeignerApprovalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-foreigner-approval',
            template: __webpack_require__(/*! ./foreigner-approval.component.html */ "./src/app/foreigner-approval/foreigner-approval.component.html"),
            styles: [__webpack_require__(/*! ./foreigner-approval.component.css */ "./src/app/foreigner-approval/foreigner-approval.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["AccountService"]])
    ], ForeignerApprovalComponent);
    return ForeignerApprovalComponent;
}());



/***/ }),

/***/ "./src/app/government-publication/government-publication-create/government-publication-create.component.css":
/*!******************************************************************************************************************!*\
  !*** ./src/app/government-publication/government-publication-create/government-publication-create.component.css ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-half-width{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nb3Zlcm5tZW50LXB1YmxpY2F0aW9uL2dvdmVybm1lbnQtcHVibGljYXRpb24tY3JlYXRlL2dvdmVybm1lbnQtcHVibGljYXRpb24tY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiYXBwL2dvdmVybm1lbnQtcHVibGljYXRpb24vZ292ZXJubWVudC1wdWJsaWNhdGlvbi1jcmVhdGUvZ292ZXJubWVudC1wdWJsaWNhdGlvbi1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhhbGYtd2lkdGh7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/government-publication/government-publication-create/government-publication-create.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/government-publication/government-publication-create/government-publication-create.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create Book</h1>\r\n<form class=\"example-form\" (ngSubmit)=\"onSubmit(govPub)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Sector\" type=\"text\" [(ngModel)]=\"govPub.sector\" required name=\"sector\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"DisplayName\" type=\"text\" [(ngModel)]=\"govPub.displayName\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"totalPages\" type=\"number\" [(ngModel)]=\"govPub.totalPages\" required name=\"totalPages\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"publisher\" type=\"text\" [(ngModel)]=\"govPub.publisher\" name=\"publisher\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"govPub.price\" name=\"price\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Category</p>\r\n      <mat-select [(ngModel)]=\"govPub.categoryId\" name=\"categoryId\">\r\n        <mat-option *ngFor=\"let category of categories\" [value]=category.id>{{category.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Author</p>\r\n      <mat-select [(ngModel)]=\"govPub.authorId\" name=authorId>\r\n        <mat-option *ngFor=\"let author of authors\" [value]=author.id>{{author.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"mt-3\">\r\n    <button class=\"btn btn btn-danger mr-3\" (click)=\"onNoClick()\">Close</button>\r\n    <button type=\"submit\" class=\"btn btn btn-success\">Save</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/government-publication/government-publication-create/government-publication-create.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/government-publication/government-publication-create/government-publication-create.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: GovernmentPublicationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentPublicationCreateComponent", function() { return GovernmentPublicationCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var GovernmentPublicationCreateComponent = /** @class */ (function () {
    function GovernmentPublicationCreateComponent(dialogRef, token, _govService, _authorService, _categoryService) {
        this.dialogRef = dialogRef;
        this.token = token;
        this._govService = _govService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.authors = [];
        this.categories = [];
        this.govPub = new src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["GovtPublicationInputDto"]();
        this.canEditSrc = false;
    }
    GovernmentPublicationCreateComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GovernmentPublicationCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
    };
    GovernmentPublicationCreateComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._govService.create(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    GovernmentPublicationCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-government-publication-create',
            template: __webpack_require__(/*! ./government-publication-create.component.html */ "./src/app/government-publication/government-publication-create/government-publication-create.component.html"),
            styles: [__webpack_require__(/*! ./government-publication-create.component.css */ "./src/app/government-publication/government-publication-create/government-publication-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["GovernmentPublicationsService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], GovernmentPublicationCreateComponent);
    return GovernmentPublicationCreateComponent;
}());



/***/ }),

/***/ "./src/app/government-publication/government-publication-edit/government-publication-edit.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/government-publication/government-publication-edit/government-publication-edit.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-half-width{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nb3Zlcm5tZW50LXB1YmxpY2F0aW9uL2dvdmVybm1lbnQtcHVibGljYXRpb24tZWRpdC9nb3Zlcm5tZW50LXB1YmxpY2F0aW9uLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAvZ292ZXJubWVudC1wdWJsaWNhdGlvbi9nb3Zlcm5tZW50LXB1YmxpY2F0aW9uLWVkaXQvZ292ZXJubWVudC1wdWJsaWNhdGlvbi1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oYWxmLXdpZHRoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/government-publication/government-publication-edit/government-publication-edit.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/government-publication/government-publication-edit/government-publication-edit.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit government publication {{govPub.data.displayName}}</h1>\r\n<form class=\"example-form\" (ngSubmit)=\"onSubmit(govPub.data)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Sector\" type=\"text\" [(ngModel)]=\"govPub.data.sector\" required\r\n          name=\"isbnNumber\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"DsiplayName\" type=\"text\" [(ngModel)]=\"govPub.data.displayName\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"totalPages\" type=\"number\" [(ngModel)]=\"govPub.data.totalPages\" required\r\n          name=\"totalPages\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"publisher\" type=\"text\" [(ngModel)]=\"govPub.data.publisher\" name=\"publisher\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"govPub.data.price\" required name=\"price\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\" *ngIf=\"canType\">\r\n      <p class=\"mat-small\">Source Type</p>\r\n      <mat-select [(ngModel)]=\"govPub.data.sourceType\" name=\"sourceType\">\r\n        <mat-option [value]=10>Public</mat-option>\r\n        <mat-option [value]=20>Rare</mat-option>\r\n      </mat-select>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Category</p>\r\n      <mat-select [(ngModel)]=\"govPub.data.category.id\" name=\"id\">\r\n        <mat-option *ngFor=\"let category of categories\" [value]=category.id>{{category.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Author</p>\r\n      <mat-select [(ngModel)]=\"govPub.data.author.id\" name=id>\r\n        <mat-option *ngFor=\"let author of authors\" [value]=author.id>{{author.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"mt-3\">\r\n    <button class=\"btn btn btn-danger mr-3\" (click)=\"onNoClick()\">Close</button>\r\n    <button type=\"submit\" class=\"btn btn btn-success\">Save</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/government-publication/government-publication-edit/government-publication-edit.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/government-publication/government-publication-edit/government-publication-edit.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GovernmentPublicationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentPublicationEditComponent", function() { return GovernmentPublicationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var GovernmentPublicationEditComponent = /** @class */ (function () {
    function GovernmentPublicationEditComponent(dialogRef, govPub, _govService, _authorService, _categoryService, jwtHelper) {
        this.dialogRef = dialogRef;
        this.govPub = govPub;
        this._govService = _govService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.jwtHelper = jwtHelper;
        this.authors = [];
        this.categories = [];
        this.canType = false;
    }
    GovernmentPublicationEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GovernmentPublicationEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (decodeToken['permission'].includes("govt.rare"))
            this.canType = true;
    };
    GovernmentPublicationEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._govService.update(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    GovernmentPublicationEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-government-publication-edit',
            template: __webpack_require__(/*! ./government-publication-edit.component.html */ "./src/app/government-publication/government-publication-edit/government-publication-edit.component.html"),
            styles: [__webpack_require__(/*! ./government-publication-edit.component.css */ "./src/app/government-publication/government-publication-edit/government-publication-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["GovtPublicationUpdateDto"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["GovernmentPublicationsService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], GovernmentPublicationEditComponent);
    return GovernmentPublicationEditComponent;
}());



/***/ }),

/***/ "./src/app/government-publication/government-publication.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/government-publication/government-publication.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\r\n  background-image: url('https://via.placeholder.com/150C/O https://placeholder.com/');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9nb3Zlcm5tZW50LXB1YmxpY2F0aW9uL2dvdmVybm1lbnQtcHVibGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9GQUFvRjtFQUNwRixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiYXBwL2dvdmVybm1lbnQtcHVibGljYXRpb24vZ292ZXJubWVudC1wdWJsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBDL08gaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/government-publication/government-publication.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/government-publication/government-publication.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-2\" style=\"margin-bottom: 10px;\">\r\n        <button *ngIf=\"canEdit\" class=\"btn btn-block btn-outline-primary\" (click)=\"openCreate()\">Create New</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 mb-3\" *ngFor=\"let govPub of govPubOutputDto\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n\r\n          <div style=\"width: 100%\">\r\n            <mat-select style=\"width: 30%; float: right;\" *ngIf=\"canEdit\" (selectionChange)=\"option($event.value)\">\r\n              <mat-option [value]=\"govPub\">Edit</mat-option>\r\n              <mat-option [value]=\"govPub.id\" *ngIf=\"canDelete\">Delete</mat-option>\r\n            </mat-select>\r\n          </div>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <p><small>#{{govPub.category.displayName}}</small></p>\r\n          <h4>{{govPub.displayName}}</h4>\r\n          <mat-divider></mat-divider><br />\r\n          <span style=\"font-size: 12px;\">{{govPub.author.displayName}}</span><br />\r\n          <small>\r\n              {{govPub.author.emailAddress}}\r\n          </small>\r\n\r\n          <i><strong></strong></i>\r\n          <p style=\"text-align:right\">{{govPub.totalPages}} Pages</p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/government-publication/government-publication.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/government-publication/government-publication.component.ts ***!
  \****************************************************************************/
/*! exports provided: GovernmentPublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentPublicationComponent", function() { return GovernmentPublicationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _government_publication_edit_government_publication_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./government-publication-edit/government-publication-edit.component */ "./src/app/government-publication/government-publication-edit/government-publication-edit.component.ts");
/* harmony import */ var _government_publication_create_government_publication_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./government-publication-create/government-publication-create.component */ "./src/app/government-publication/government-publication-create/government-publication-create.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");









var GovernmentPublicationComponent = /** @class */ (function () {
    function GovernmentPublicationComponent(jwtHelper, _govService, dialog, router, _authservice) {
        this.jwtHelper = jwtHelper;
        this._govService = _govService;
        this.dialog = dialog;
        this.router = router;
        this._authservice = _authservice;
        this.govPubOutputDto = [];
        this.canEdit = false;
        this.canDelete = false;
        this.isForeign = false;
    }
    GovernmentPublicationComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authservice.isAuthenticated()) {
            this._govService.getAll().subscribe(function (res) {
                _this.govPubOutputDto = res;
            });
            var token = localStorage.getItem('token');
            var decodeToken = this.jwtHelper.decodeToken(token);
            if (!decodeToken) {
                return false;
            }
            if (decodeToken['permission'].includes("books.edit"))
                this.canEdit = true;
            if (decodeToken['permission'].includes("books.delete"))
                this.canDelete = true;
            if (decodeToken['role'] == 'ForeignUser')
                this.isForeign = true;
        }
        else {
            this.router.navigate(['/404NotFound']);
        }
    };
    GovernmentPublicationComponent.prototype.option = function (element) {
        var _this = this;
        if (!isNaN(element)) {
            this._govService.delete(element).subscribe(function (res) {
                _this.ngOnInit();
            });
        }
        else {
            this.openDialog(element);
        }
    };
    GovernmentPublicationComponent.prototype.openDialog = function (govPub) {
        var dialogRef = this.dialog.open(_government_publication_edit_government_publication_edit_component__WEBPACK_IMPORTED_MODULE_5__["GovernmentPublicationEditComponent"], {
            width: '800px',
            data: { data: govPub }
        });
    };
    GovernmentPublicationComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(_government_publication_create_government_publication_create_component__WEBPACK_IMPORTED_MODULE_6__["GovernmentPublicationCreateComponent"], {
            width: '800px'
        });
    };
    GovernmentPublicationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-government-publication',
            template: __webpack_require__(/*! ./government-publication.component.html */ "./src/app/government-publication/government-publication.component.html"),
            styles: [__webpack_require__(/*! ./government-publication.component.css */ "./src/app/government-publication/government-publication.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"],
            _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["GovernmentPublicationsService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], GovernmentPublicationComponent);
    return GovernmentPublicationComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header {\r\n    width: 100%;\r\n    height: 60px;\r\n    background-color: rgb(250, 250, 250);\r\n    margin-bottom: 35px;\r\n    box-shadow: 0 1px 10px lightgrey;\r\n}\r\n\r\n.navBarOut {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 100%;\r\n}\r\n\r\n.navBarBg {\r\n    background-color: \"blue\";\r\n}\r\n\r\n.menu-spacer {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.topNav\r\n{\r\n    width: 80%;\r\n    margin-left: 0px;\r\n    float: right;\r\n}\r\n\r\n.navBarButtons {\r\n    float: right;\r\n    margin: 10px;\r\n    border: none;\r\n    background-color: transparent;\r\n    cursor: pointer;\r\n    color: grey;\r\n    padding: 10px;\r\n    font-size: 15px;\r\n}\r\n\r\n.accountIcon {\r\n    background-color: rgb(247, 181, 14);\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    align-items: center;\r\n    margin-left: 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.topBg {\r\n    background-color: black;\r\n    height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakIiLCJmaWxlIjoiYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uaGVhZGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggbGlnaHRncmV5O1xyXG59XHJcblxyXG4ubmF2QmFyT3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdkJhckJnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFwiYmx1ZVwiO1xyXG59XHJcblxyXG4ubWVudS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnRvcE5hdlxyXG57XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm5hdkJhckJ1dHRvbnMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5hY2NvdW50SWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxODEsIDE0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG9wQmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n\r\n  <mat-toolbar class=\"navBarOut\">\r\n\r\n    <span style=\"font-size: 32px; font-weight: bold; color: rgb(66, 66, 66);\">{{ title }}</span>\r\n\r\n    <div class=\"topNav\">\r\n\r\n      <a *ngIf=\"viewForeignerApprovals\" routerLink=\"/foreignerApproval\">\r\n        <button class=\"navBarButtons\">Foreigner Approvals</button>\r\n      </a>\r\n      <a routerLink=\"/\">\r\n        <button class=\"navBarButtons\">Categories</button>\r\n      </a>\r\n      <a routerLink=\"/\">\r\n        <button class=\"navBarButtons\">Authors</button>\r\n      </a>\r\n      <a *ngIf=\"viewRare\" routerLink=\"/rareCollection\">\r\n        <button class=\"navBarButtons\">Rare Collection</button>\r\n      </a>\r\n      <a routerLink=\"/govPublication\">\r\n        <button class=\"navBarButtons\">Government-Publications</button>\r\n      </a>\r\n      <a routerLink=\"/\">\r\n        <button class=\"navBarButtons\">Ola-Leafs</button>\r\n      </a>\r\n      <a routerLink=\"/newsPaper\">\r\n        <button class=\"navBarButtons\">News-Papers</button>\r\n      </a>\r\n      <a routerLink=\"/\">\r\n        <button class=\"navBarButtons\">Books</button>\r\n      </a>\r\n\r\n\r\n    </div>\r\n\r\n    <div style=\"margin-left: 20px; color: rgb(94, 94, 94);\">\r\n      <span style=\"font-size: 12px; margin-left: 12px;\">Welcome </span>\r\n      <span style=\"font-size: 14px; margin-left: 4px; font-weight: bold;\">{{ _showName() }}</span>\r\n    </div>\r\n\r\n    <div style=\"margin-left: 20px;\" [style.display]=\"(isLoggedIn == false) ? 'block' : 'none' \">\r\n\r\n      <a style=\"text-decoration: none; color: white;\" routerLink=\"/login\">\r\n        <button mat-raised-button style=\"background-color: rgb(0, 140, 255); color: white; margin-left: 10px;\">\r\n          Login\r\n        </button>\r\n      </a>\r\n\r\n      <a style=\"text-decoration: none; color: white;\" routerLink=\"/register\">\r\n        <button mat-raised-button style=\"background-color: rgb(0, 140, 255); color: white; margin-left: 10px;\">\r\n          Register\r\n        </button>\r\n      </a>\r\n\r\n    </div>\r\n\r\n    <div [style.display]=\"(isLoggedIn == true) ? 'block' : 'none' \">\r\n\r\n        <a style=\"text-decoration: none; color: white;\" routerLink=\"/\">\r\n          <button (click)=\"_logout()\" mat-raised-button style=\"background-color: rgb(0, 140, 255); color: white; margin-left: 10px;\">\r\n            Logout\r\n          </button>\r\n        </a>\r\n\r\n    </div>\r\n\r\n  </mat-toolbar>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var HeaderComponent = /** @class */ (function () {
    // isLoggedIn$: Observable<boolean>;
    function HeaderComponent(router, jwtHelper) {
        this.router = router;
        this.jwtHelper = jwtHelper;
        this.title = 'Intellect';
        this.name = "Guest";
        this.viewRare = false;
        this.viewForeignerApprovals = false;
        this.isLoggedIn = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (!decodeToken) {
            return false;
        }
        if (decodeToken['role'][0] == "LocalUser") {
            this.viewRare = true;
        }
        if (decodeToken['role'] == 'Admin') {
            this.viewForeignerApprovals = true;
        }
    };
    HeaderComponent.prototype._showName = function () {
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
            this.name = localStorage.getItem('username');
        }
        else {
            this.name = "Guest";
        }
        return this.name;
    };
    HeaderComponent.prototype._logout = function () {
        this.isLoggedIn = false;
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.router.navigate(['/home']);
        location.reload();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n    max-width: 300px;\r\n}\r\n\r\n.example-header-image {\r\n    background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n    background-size: cover;\r\n}\r\n\r\n.cardGroup {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\n.eachCard {\r\n    display: table-cell;\r\n    padding: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1GQUFtRjtJQUNuRixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcmRHcm91cCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZWFjaENhcmQge1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n  <!--Banner-->\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-4\" *ngFor=\"let book of bookOutputDto\">\r\n        <mat-card class=\"example-card\">\r\n            <mat-card-header>\r\n              <div mat-card-avatar class=\"example-header-image\"></div>\r\n              <mat-card-title>{{book.displayName}}</mat-card-title>\r\n              <mat-card-subtitle>{{book.author.displayName}}</mat-card-subtitle>\r\n            </mat-card-header>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-content>\r\n              <p>\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dignissimos ut maxime dolore enim, temporibus reprehenderit \r\n                numquam doloremque cum eos ad! Voluptate modi, vitae iste vel fuga fugiat culpa animi!\"</p>\r\n            \r\n              <i><strong>#{{book.category.displayName}}</strong></i>\r\n              <p style=\"text-align:right\">{{book.totalPages}} Pages</p>\r\n            </mat-card-content>\r\n            <mat-divider></mat-divider>\r\n            <mat-card-footer style=\"margin: 0px !important;\">\r\n                <mat-card-subtitle><i>{{book.author.emailAddress}}</i></mat-card-subtitle>\r\n            </mat-card-footer>\r\n          </mat-card>\r\n    </div>  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(jwtHelper, _Activatedroute, router, _bookService) {
        this.jwtHelper = jwtHelper;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this._bookService = _bookService;
        this.bookOutputDto = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getAll().subscribe(function (res) {
            _this.bookOutputDto = res;
        });
        this.id = this._Activatedroute.snapshot.params['id'];
        console.log(this.id);
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (!decodeToken) {
            return false;
        }
        if (decodeToken['role'] == 'Admin') {
            this.admin = "Admin";
        }
        else {
            this.admin = "No";
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_4__["BooksService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.loginCard {\r\n    max-width: 30%;\r\n    margin: 10% auto;\r\n    padding: 20px 20px 40px 20px;\r\n}\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.loginBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.regBtnContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.regBtn {\r\n    display: table;\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoiYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2luQ2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgIG1hcmdpbjogMTAlIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggNDBweCAyMHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5sb2dpbkJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWdCdG5Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnQnRuIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"loginCard\">\r\n    \r\n  <mat-card-actions>\r\n    \r\n  <a routerLink=\"/\">\r\n    <button mat-icon-button>\r\n      <mat-icon >keyboard_arrow_left</mat-icon> \r\n      <span>back to home</span>\r\n    </button>\r\n  </a>\r\n\r\n  </mat-card-actions>\r\n\r\n  <mat-card-header>\r\n    <h2>Login Portal</h2>\r\n  </mat-card-header>\r\n\r\n  <form>\r\n    \r\n    <div class=\"formField\">\r\n      <mat-form-field class=\"example-full-width inputField\">\r\n          <input matInput placeholder=\"Username\" [formControl]=\"username\" >\r\n      </mat-form-field>\r\n    </div>\r\n  \r\n    <div class=\"formField\">\r\n      <mat-form-field class=\"example-full-width inputField\">\r\n          <input type=\"password\" matInput placeholder=\"Password\" [formControl]=\"password\"\r\n           [errorStateMatcher]=\"matcher\">\r\n        \r\n      </mat-form-field>\r\n    </div>\r\n  \r\n    <div class=\"loginBtn\">\r\n        <button (click) = \"_login()\" mat-raised-button style=\"background-color: rgb(0, 140, 255); color: white;\">Login</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n<p>{{ msg }}</p>\r\n\r\n</mat-card>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(_authService, router, activated) {
        this._authService = _authService;
        this.router = router;
        this.activated = activated;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this._authService.isAuthenticated()) {
            this.router.navigate(['/book']);
        }
    };
    LoginComponent.prototype._login = function () {
        var _this = this;
        this.activated.queryParams.subscribe(function (params) {
            _this.returnUrl = params["returnUrl"];
        });
        this._authService.authenticate(this.username.value, this.password.value)
            .subscribe(function (res) {
            if (res) {
                _this.router.navigate(['/book']);
                location.reload();
            }
            else {
                _this.msg = "Error";
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/news-paper/news-paper-create/news-paper-create.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/news-paper/news-paper-create/news-paper-create.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-half-width{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZXdzLXBhcGVyL25ld3MtcGFwZXItY3JlYXRlL25ld3MtcGFwZXItY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiYXBwL25ld3MtcGFwZXIvbmV3cy1wYXBlci1jcmVhdGUvbmV3cy1wYXBlci1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWhhbGYtd2lkdGh7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/news-paper/news-paper-create/news-paper-create.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/news-paper/news-paper-create/news-paper-create.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Create news paper</h1>\r\n<form class=\"example-form\" (ngSubmit)=\"onSubmit(newsPaper)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"DisplayName\" type=\"text\" [(ngModel)]=\"newsPaper.displayName\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Total sub-parts\" type=\"text\" [(ngModel)]=\"newsPaper.totalSubParts\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"publisher\" type=\"text\" [(ngModel)]=\"newsPaper.publisher\" name=\"publisher\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"newsPaper.price\" name=\"price\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Category</p>\r\n      <mat-select [(ngModel)]=\"newsPaper.categoryId\" name=\"categoryId\">\r\n        <mat-option *ngFor=\"let category of categories\" [value]=category.id>{{category.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Author</p>\r\n      <mat-select [(ngModel)]=\"newsPaper.authorId\" name=authorId>\r\n        <mat-option *ngFor=\"let author of authors\" [value]=author.id>{{author.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"mt-3\">\r\n    <button class=\"btn btn btn-danger mr-3\" (click)=\"onNoClick()\">Close</button>\r\n    <button type=\"submit\" class=\"btn btn btn-success\">Save</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/news-paper/news-paper-create/news-paper-create.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/news-paper/news-paper-create/news-paper-create.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewsPaperCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPaperCreateComponent", function() { return NewsPaperCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var NewsPaperCreateComponent = /** @class */ (function () {
    function NewsPaperCreateComponent(dialogRef, token, _newsService, _authorService, _categoryService) {
        this.dialogRef = dialogRef;
        this.token = token;
        this._newsService = _newsService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.authors = [];
        this.categories = [];
        this.newsPaper = new src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["NewspaperInputDto"]();
        this.canEditSrc = false;
    }
    NewsPaperCreateComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewsPaperCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
    };
    NewsPaperCreateComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._newsService.create(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    NewsPaperCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-paper-create',
            template: __webpack_require__(/*! ./news-paper-create.component.html */ "./src/app/news-paper/news-paper-create/news-paper-create.component.html"),
            styles: [__webpack_require__(/*! ./news-paper-create.component.css */ "./src/app/news-paper/news-paper-create/news-paper-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["NewsPapersService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], NewsPaperCreateComponent);
    return NewsPaperCreateComponent;
}());



/***/ }),

/***/ "./src/app/news-paper/news-paper-edit/news-paper-edit.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/news-paper/news-paper-edit/news-paper-edit.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-half-width{\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZXdzLXBhcGVyL25ld3MtcGFwZXItZWRpdC9uZXdzLXBhcGVyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAvbmV3cy1wYXBlci9uZXdzLXBhcGVyLWVkaXQvbmV3cy1wYXBlci1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1oYWxmLXdpZHRoe1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/news-paper/news-paper-edit/news-paper-edit.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/news-paper/news-paper-edit/news-paper-edit.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edit News Paper {{newsPaper.data.displayName}}</h1>\r\n<form class=\"example-form\" (ngSubmit)=\"onSubmit(newsPaper.data)\">\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"DsiplayName\" type=\"text\" [(ngModel)]=\"newsPaper.data.displayName\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"DsiplayName\" type=\"text\" [(ngModel)]=\"newsPaper.data.totalSubParts\" required\r\n          name=\"displayName\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"publisher\" type=\"text\" [(ngModel)]=\"newsPaper.data.publisher\" name=\"publisher\">\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mb-3\">\r\n    <div class=\"col-6\">\r\n      <mat-form-field class=\"example-half-width\">\r\n        <input matInput placeholder=\"Price\" type=\"number\" [(ngModel)]=\"newsPaper.data.price\" required name=\"price\">\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"col-6\" *ngIf=\"canType\">\r\n      <p class=\"mat-small\">Source Type</p>\r\n      <mat-select [(ngModel)]=\"newsPaper.data.sourceType\" name=\"sourceType\">\r\n        <mat-option [value]=10>Public</mat-option>\r\n        <mat-option [value]=20>Rare</mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Category</p>\r\n      <mat-select [(ngModel)]=\"newsPaper.data.category.id\" name=\"id\">\r\n        <mat-option *ngFor=\"let category of categories\" [value]=category.id>{{category.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"col-6\">\r\n      <p class=\"mat-small\">Author</p>\r\n      <mat-select [(ngModel)]=\"newsPaper.data.author.id\" name=id>\r\n        <mat-option *ngFor=\"let author of authors\" [value]=author.id>{{author.displayName}}</mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"mt-3\">\r\n    <button class=\"btn btn btn-danger mr-3\" (click)=\"onNoClick()\">Close</button>\r\n    <button type=\"submit\" class=\"btn btn btn-success\">Save</button>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/news-paper/news-paper-edit/news-paper-edit.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/news-paper/news-paper-edit/news-paper-edit.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewsPaperEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPaperEditComponent", function() { return NewsPaperEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var NewsPaperEditComponent = /** @class */ (function () {
    function NewsPaperEditComponent(dialogRef, newsPaper, _newsService, _authorService, _categoryService, jwtHelper) {
        this.dialogRef = dialogRef;
        this.newsPaper = newsPaper;
        this._newsService = _newsService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.jwtHelper = jwtHelper;
        this.authors = [];
        this.categories = [];
        this.canType = false;
    }
    NewsPaperEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewsPaperEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (decodeToken['permission'].includes("newspaper.rare"))
            this.canType = true;
    };
    NewsPaperEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._newsService.update(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    NewsPaperEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-paper-edit',
            template: __webpack_require__(/*! ./news-paper-edit.component.html */ "./src/app/news-paper/news-paper-edit/news-paper-edit.component.html"),
            styles: [__webpack_require__(/*! ./news-paper-edit.component.css */ "./src/app/news-paper/news-paper-edit/news-paper-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["NewspaperUpdateDto"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["NewsPapersService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["AuthorService"],
            src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]])
    ], NewsPaperEditComponent);
    return NewsPaperEditComponent;
}());



/***/ }),

/***/ "./src/app/news-paper/news-paper.component.css":
/*!*****************************************************!*\
  !*** ./src/app/news-paper/news-paper.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\r\n  background-image: url('https://via.placeholder.com/150C/O https://placeholder.com/');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9uZXdzLXBhcGVyL25ld3MtcGFwZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9GQUFvRjtFQUNwRixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiYXBwL25ld3MtcGFwZXIvbmV3cy1wYXBlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTBDL08gaHR0cHM6Ly9wbGFjZWhvbGRlci5jb20vJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/news-paper/news-paper.component.html":
/*!******************************************************!*\
  !*** ./src/app/news-paper/news-paper.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px;\">\r\n  <div class=\"col-2\" style=\"margin-bottom: 10px;\">\r\n    <button *ngIf=\"canEdit\" class=\"btn btn-block btn-outline-primary\" (click)=\"openCreate()\">Create New</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 mb-3\" *ngFor=\"let paper of newsOutputDto\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n\r\n          <div style=\"width: 100%\">\r\n            <mat-select style=\"width: 30%; float: right;\" *ngIf=\"canEdit\" (selectionChange)=\"option($event.value)\">\r\n              <mat-option [value]=\"paper\">Edit</mat-option>\r\n              <mat-option [value]=\"paper.id\" *ngIf=\"canDelete\">Delete</mat-option>\r\n            </mat-select>\r\n          </div>\r\n\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <p><small>#{{paper.category.displayName}}</small></p>\r\n          <h4>{{paper.displayName}}</h4>\r\n          <mat-divider></mat-divider><br />\r\n          <span style=\"font-size: 12px;\">{{paper.author.displayName}}</span><br />\r\n          <small>\r\n              {{paper.author.emailAddress}}\r\n          </small>\r\n\r\n          <i><strong></strong></i>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/news-paper/news-paper.component.ts":
/*!****************************************************!*\
  !*** ./src/app/news-paper/news-paper.component.ts ***!
  \****************************************************/
/*! exports provided: NewsPaperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPaperComponent", function() { return NewsPaperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _news_paper_edit_news_paper_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-paper-edit/news-paper-edit.component */ "./src/app/news-paper/news-paper-edit/news-paper-edit.component.ts");
/* harmony import */ var _news_paper_create_news_paper_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-paper-create/news-paper-create.component */ "./src/app/news-paper/news-paper-create/news-paper-create.component.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var NewsPaperComponent = /** @class */ (function () {
    function NewsPaperComponent(jwtHelper, _newsService, dialog, _authservice, router) {
        this.jwtHelper = jwtHelper;
        this._newsService = _newsService;
        this.dialog = dialog;
        this._authservice = _authservice;
        this.router = router;
        this.newsOutputDto = [];
        this.canEdit = false;
        this.canDelete = false;
        this.isForeign = false;
    }
    NewsPaperComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authservice.isAuthenticated()) {
            this._newsService.getAll().subscribe(function (res) {
                _this.newsOutputDto = res;
            });
            var token = localStorage.getItem('token');
            var decodeToken = this.jwtHelper.decodeToken(token);
            if (!decodeToken) {
                return false;
            }
            if (decodeToken['permission'].includes("newspaper.edit"))
                this.canEdit = true;
            if (decodeToken['permission'].includes("newspaper.delete"))
                this.canDelete = true;
            if (decodeToken['role'] == 'ForeignUser')
                this.isForeign = true;
        }
        else {
            this.router.navigate(['/404NotFound']);
        }
    };
    NewsPaperComponent.prototype.option = function (element) {
        var _this = this;
        if (!isNaN(element)) {
            this._newsService.delete(element).subscribe(function (res) {
                _this.ngOnInit();
            });
        }
        else {
            this.openDialog(element);
        }
    };
    NewsPaperComponent.prototype.openDialog = function (newsPaper) {
        var dialogRef = this.dialog.open(_news_paper_edit_news_paper_edit_component__WEBPACK_IMPORTED_MODULE_5__["NewsPaperEditComponent"], {
            width: '800px',
            data: { data: newsPaper }
        });
    };
    NewsPaperComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(_news_paper_create_news_paper_create_component__WEBPACK_IMPORTED_MODULE_6__["NewsPaperCreateComponent"], {
            width: '800px'
        });
    };
    NewsPaperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-paper',
            template: __webpack_require__(/*! ./news-paper.component.html */ "./src/app/news-paper/news-paper.component.html"),
            styles: [__webpack_require__(/*! ./news-paper.component.css */ "./src/app/news-paper/news-paper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"],
            _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["NewsPapersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], NewsPaperComponent);
    return NewsPaperComponent;
}());



/***/ }),

/***/ "./src/app/not-found404/not-found404.component.css":
/*!*********************************************************!*\
  !*** ./src/app/not-found404/not-found404.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvbm90LWZvdW5kNDA0L25vdC1mb3VuZDQwNC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/not-found404/not-found404.component.html":
/*!**********************************************************!*\
  !*** ./src/app/not-found404/not-found404.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin: 100px auto; width: 40%; height: auto; padding: 20px; background-color: lightgrey;\">\r\n\r\n    <h1>401 Unauthorized</h1>\r\n    <br />\r\n    <p><strong>You do not have authorization to view this content</strong></p>\r\n    <p><strong>Please login and try again!</strong></p>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/not-found404/not-found404.component.ts":
/*!********************************************************!*\
  !*** ./src/app/not-found404/not-found404.component.ts ***!
  \********************************************************/
/*! exports provided: NotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return NotFound404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFound404Component = /** @class */ (function () {
    function NotFound404Component() {
    }
    NotFound404Component.prototype.ngOnInit = function () {
    };
    NotFound404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found404',
            template: __webpack_require__(/*! ./not-found404.component.html */ "./src/app/not-found404/not-found404.component.html"),
            styles: [__webpack_require__(/*! ./not-found404.component.css */ "./src/app/not-found404/not-found404.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFound404Component);
    return NotFound404Component;
}());



/***/ }),

/***/ "./src/app/rare-collection/books/books.component.css":
/*!***********************************************************!*\
  !*** ./src/app/rare-collection/books/books.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmFyZS1jb2xsZWN0aW9uL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rare-collection/books/books.component.html":
/*!************************************************************!*\
  !*** ./src/app/rare-collection/books/books.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-2\" style=\"margin-bottom: 10px;\">\r\n    <button *ngIf=\"canEdit\" class=\"btn btn-block btn-outline-primary\" (click)=\"openCreate()\">Create New</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 mb-3\" *ngFor=\"let book of bookOutputDto\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <div style=\"width: 100%\">\r\n            <mat-select style=\"width: 30%; float: right;\" *ngIf=\"canEdit\" (selectionChange)=\"option($event.value)\">\r\n              <mat-option [value]=\"book\">Edit</mat-option>\r\n              <mat-option [value]=\"book.id\" *ngIf=\"canDelete\">Delete</mat-option>\r\n            </mat-select>\r\n          </div>\r\n\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <p><small>#{{book.category.displayName}}</small></p>\r\n          <h4>{{book.displayName}}</h4>\r\n          <h6>Rs. {{ book.price }}</h6>\r\n          <mat-divider></mat-divider><br />\r\n          <span style=\"font-size: 12px;\">{{book.author.displayName}}</span><br />\r\n          <small>\r\n              {{book.author.emailAddress}}\r\n          </small> \r\n            \r\n          <i><strong></strong></i>\r\n\r\n          <p style=\"text-align:right\">{{book.totalPages}} Pages</p>\r\n          \r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/rare-collection/books/books.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/rare-collection/books/books.component.ts ***!
  \**********************************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");



var BooksComponent = /** @class */ (function () {
    function BooksComponent(_bookService) {
        this._bookService = _bookService;
        this.bookOutputDto = [];
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getRare().subscribe(function (res) {
            _this.bookOutputDto = res;
        });
    };
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rare-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/rare-collection/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/rare-collection/books/books.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["BooksService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/rare-collection/government-publications/government-publications.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/rare-collection/government-publications/government-publications.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmFyZS1jb2xsZWN0aW9uL2dvdmVybm1lbnQtcHVibGljYXRpb25zL2dvdmVybm1lbnQtcHVibGljYXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rare-collection/government-publications/government-publications.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/rare-collection/government-publications/government-publications.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-4 mb-3\" *ngFor=\"let govPub of govPubOutputDto\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n\r\n          <div style=\"width: 100%\">\r\n            <mat-select style=\"width: 30%; float: right;\" *ngIf=\"canEdit\" (selectionChange)=\"option($event.value)\">\r\n              <mat-option [value]=\"govPub\">Edit</mat-option>\r\n              <mat-option [value]=\"govPub.id\" *ngIf=\"canDelete\">Delete</mat-option>\r\n            </mat-select>\r\n          </div>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <p><small>#{{govPub.category.displayName}}</small></p>\r\n          <h4>{{govPub.displayName}}</h4>\r\n          <mat-divider></mat-divider><br />\r\n          <span style=\"font-size: 12px;\">{{govPub.author.displayName}}</span><br />\r\n          <small>\r\n              {{govPub.author.emailAddress}}\r\n          </small>\r\n\r\n          <i><strong></strong></i>\r\n          <p style=\"text-align:right\">{{govPub.totalPages}} Pages</p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rare-collection/government-publications/government-publications.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/rare-collection/government-publications/government-publications.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: GovernmentPublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentPublicationsComponent", function() { return GovernmentPublicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");




var GovernmentPublicationsComponent = /** @class */ (function () {
    function GovernmentPublicationsComponent(_govService, _authservice) {
        this._govService = _govService;
        this._authservice = _authservice;
        this.govPubOutputDto = [];
    }
    GovernmentPublicationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this._authservice.isAuthenticated()) {
            this._govService.getRare().subscribe(function (res) {
                _this.govPubOutputDto = res;
            });
        }
    };
    GovernmentPublicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rare-government-publications',
            template: __webpack_require__(/*! ./government-publications.component.html */ "./src/app/rare-collection/government-publications/government-publications.component.html"),
            styles: [__webpack_require__(/*! ./government-publications.component.css */ "./src/app/rare-collection/government-publications/government-publications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["GovernmentPublicationsService"],
            src_app_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], GovernmentPublicationsComponent);
    return GovernmentPublicationsComponent;
}());



/***/ }),

/***/ "./src/app/rare-collection/newspapers/newspapers.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/rare-collection/newspapers/newspapers.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmFyZS1jb2xsZWN0aW9uL25ld3NwYXBlcnMvbmV3c3BhcGVycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rare-collection/newspapers/newspapers.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/rare-collection/newspapers/newspapers.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px;\">\r\n  <div class=\"col-2\" style=\"margin-bottom: 10px;\">\r\n    <button *ngIf=\"canEdit\" class=\"btn btn-block btn-outline-primary\" (click)=\"openCreate()\">Create New</button>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-4 mb-3\" *ngFor=\"let paper of newsOutputDto\">\r\n      <mat-card class=\"example-card\">\r\n        <mat-card-header>\r\n          <!-- <div mat-card-avatar class=\"example-header-image\"></div> -->\r\n\r\n          <div style=\"width: 100%\">\r\n            <mat-select style=\"width: 30%; float: right;\" *ngIf=\"canEdit\" (selectionChange)=\"option($event.value)\">\r\n              <mat-option [value]=\"paper\">Edit</mat-option>\r\n              <mat-option [value]=\"paper.id\" *ngIf=\"canDelete\">Delete</mat-option>\r\n            </mat-select>\r\n          </div>\r\n\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <p><small>#{{paper.category.displayName}}</small></p>\r\n          <h4>{{paper.displayName}}</h4>\r\n          <mat-divider></mat-divider><br />\r\n          <span style=\"font-size: 12px;\">{{paper.author.displayName}}</span><br />\r\n          <small>\r\n              {{paper.author.emailAddress}}\r\n          </small>\r\n\r\n          <i><strong></strong></i>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rare-collection/newspapers/newspapers.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/rare-collection/newspapers/newspapers.component.ts ***!
  \********************************************************************/
/*! exports provided: NewspapersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspapersComponent", function() { return NewspapersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");



var NewspapersComponent = /** @class */ (function () {
    function NewspapersComponent(_newsService) {
        this._newsService = _newsService;
        this.newsOutputDto = [];
    }
    NewspapersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getRare().subscribe(function (res) {
            _this.newsOutputDto = res;
        });
    };
    NewspapersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rare-newspapers',
            template: __webpack_require__(/*! ./newspapers.component.html */ "./src/app/rare-collection/newspapers/newspapers.component.html"),
            styles: [__webpack_require__(/*! ./newspapers.component.css */ "./src/app/rare-collection/newspapers/newspapers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["NewsPapersService"]])
    ], NewspapersComponent);
    return NewspapersComponent;
}());



/***/ }),

/***/ "./src/app/rare-collection/ola-leaf/ola-leaf.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/rare-collection/ola-leaf/ola-leaf.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmFyZS1jb2xsZWN0aW9uL29sYS1sZWFmL29sYS1sZWFmLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/rare-collection/ola-leaf/ola-leaf.component.html":
/*!******************************************************************!*\
  !*** ./src/app/rare-collection/ola-leaf/ola-leaf.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  ola-leaf works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/rare-collection/ola-leaf/ola-leaf.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/rare-collection/ola-leaf/ola-leaf.component.ts ***!
  \****************************************************************/
/*! exports provided: OlaLeafComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlaLeafComponent", function() { return OlaLeafComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OlaLeafComponent = /** @class */ (function () {
    function OlaLeafComponent() {
    }
    OlaLeafComponent.prototype.ngOnInit = function () {
    };
    OlaLeafComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rare-ola-leaf',
            template: __webpack_require__(/*! ./ola-leaf.component.html */ "./src/app/rare-collection/ola-leaf/ola-leaf.component.html"),
            styles: [__webpack_require__(/*! ./ola-leaf.component.css */ "./src/app/rare-collection/ola-leaf/ola-leaf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OlaLeafComponent);
    return OlaLeafComponent;
}());



/***/ }),

/***/ "./src/app/rare-collection/rare-collection.component.css":
/*!***************************************************************!*\
  !*** ./src/app/rare-collection/rare-collection.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcmFyZS1jb2xsZWN0aW9uL3JhcmUtY29sbGVjdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rare-collection/rare-collection.component.html":
/*!****************************************************************!*\
  !*** ./src/app/rare-collection/rare-collection.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n\r\n  <mat-tab label=\"Books\">\r\n\r\n    <app-rare-books></app-rare-books>\r\n\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Newspapers\">\r\n\r\n      <app-rare-newspapers></app-rare-newspapers>\r\n\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Government Publications\">\r\n\r\n    <app-rare-government-publications></app-rare-government-publications>\r\n\r\n  </mat-tab>\r\n\r\n  <mat-tab label=\"Ola Leafs\">\r\n\r\n    <app-rare-ola-leaf></app-rare-ola-leaf>\r\n\r\n  </mat-tab>\r\n  \r\n</mat-tab-group>\r\n"

/***/ }),

/***/ "./src/app/rare-collection/rare-collection.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/rare-collection/rare-collection.component.ts ***!
  \**************************************************************/
/*! exports provided: RareCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RareCollectionComponent", function() { return RareCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RareCollectionComponent = /** @class */ (function () {
    function RareCollectionComponent() {
    }
    RareCollectionComponent.prototype.ngOnInit = function () {
    };
    RareCollectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rare-collection',
            template: __webpack_require__(/*! ./rare-collection.component.html */ "./src/app/rare-collection/rare-collection.component.html"),
            styles: [__webpack_require__(/*! ./rare-collection.component.css */ "./src/app/rare-collection/rare-collection.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RareCollectionComponent);
    return RareCollectionComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.regCard {\r\n    max-width: 30%;\r\n    margin: 5% auto;\r\n    padding: 20px 20px 40px 20px;\r\n}\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n}\r\n\r\n.regBtn {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n.loginBtnContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.loginBtn {\r\n    display: table;\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImFwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5yZWdDYXJkIHtcclxuICAgIG1heC13aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiA1JSBhdXRvO1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDQwcHggMjBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVnQnRuIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5sb2dpbkJ0bkNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbkJ0biB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"regCard\">\r\n\r\n  <a routerLink=\"/\">\r\n    <button mat-icon-button>\r\n      <mat-icon>keyboard_arrow_left</mat-icon>\r\n      <span>back to home</span>\r\n    </button>\r\n  </a>\r\n\r\n  <mat-card-header>\r\n    <h2>Register Portal</h2>\r\n  </mat-card-header>\r\n\r\n  <form class=\"example-form\" (ngSubmit)=\"register(userRegister)\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"UserName\" type=\"text\" [(ngModel)]=\"userRegister.userName\" required name=\"userName\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Email\" type=\"email\" [(ngModel)]=\"userRegister.emailAddress\" required name=\"emailAddress\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"Passowrd\" type=\"password\" [(ngModel)]=\"userRegister.password\" required name=\"password\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input matInput placeholder=\"NationId\" type=\"text\" [(ngModel)]=\"userRegister.nationalId\" min=\"10\" max=\"10\" name=\"nationalId\">\r\n    </mat-form-field>\r\n\r\n    <button type=\"submit\" class=\"btn btn-block btn-outline-success\">Register</button>\r\n  </form>\r\n\r\n</mat-card>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared-services/shared-services.component */ "./src/app/shared-services/shared-services.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, _userService, _authService) {
        this.router = router;
        this._userService = _userService;
        this._authService = _authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (this._authService.isAuthenticated()) {
            this.router.navigate(['/book']);
        }
        this.userRegister = new _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["UserRegisterInputDto"]();
    };
    RegisterComponent.prototype.register = function (userRegister) {
        var _this = this;
        this._userService.register(userRegister).subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_shared_services_component__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared-services/shared-services.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared-services/shared-services.component.ts ***!
  \**************************************************************/
/*! exports provided: API_BASE_URL, AccountService, AuthorService, BooksService, CategoryService, GovernmentPublicationsService, NewsPapersService, OlaLeafsService, UserRegisterInputDto, UnRegUserOutputDto, AddForiegnerInputDto, AuthorOutputDto, AuthorInputDto, AuthorUpdateDto, BookOutputDto, SourceType, CategoryOutputDto, BookInputDto, BookUpdateDto, AuditedEntity, Author, SourceEntity, Book, Category, CategoryInputDto, CategoryUpdateDto, GovtPublicationOutputDto, GovtPublicationInputDto, GovtPublicationUpdateDto, NewspaperOutputDto, NewspaperInputDto, NewspaperUpdateDto, OlaleafoutputDto, OlaLeafInputDto, OlaleafUpdateDto, SwaggerException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_BASE_URL", function() { return API_BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentPublicationsService", function() { return GovernmentPublicationsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPapersService", function() { return NewsPapersService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlaLeafsService", function() { return OlaLeafsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegisterInputDto", function() { return UserRegisterInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnRegUserOutputDto", function() { return UnRegUserOutputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddForiegnerInputDto", function() { return AddForiegnerInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorOutputDto", function() { return AuthorOutputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorInputDto", function() { return AuthorInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorUpdateDto", function() { return AuthorUpdateDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOutputDto", function() { return BookOutputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceType", function() { return SourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryOutputDto", function() { return CategoryOutputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookInputDto", function() { return BookInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookUpdateDto", function() { return BookUpdateDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditedEntity", function() { return AuditedEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Author", function() { return Author; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceEntity", function() { return SourceEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryInputDto", function() { return CategoryInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryUpdateDto", function() { return CategoryUpdateDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovtPublicationOutputDto", function() { return GovtPublicationOutputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovtPublicationInputDto", function() { return GovtPublicationInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovtPublicationUpdateDto", function() { return GovtPublicationUpdateDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperOutputDto", function() { return NewspaperOutputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperInputDto", function() { return NewspaperInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewspaperUpdateDto", function() { return NewspaperUpdateDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlaleafoutputDto", function() { return OlaleafoutputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlaLeafInputDto", function() { return OlaLeafInputDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlaleafUpdateDto", function() { return OlaleafUpdateDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwaggerException", function() { return SwaggerException; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v12.2.0.0 (NJsonSchema v9.13.35.0 (Newtonsoft.Json v11.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming





var API_BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('API_BASE_URL');
var AccountService = /** @class */ (function () {
    function AccountService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }
    AccountService.prototype.register = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Account/Register";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processRegister(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processRegister(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AccountService.prototype.processRegister = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AccountService.prototype.getForiegners = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Account/GetForiegners";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetForiegners(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetForiegners(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AccountService.prototype.processGetForiegners = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_1 = resultData200; _i < resultData200_1.length; _i++) {
                        var item = resultData200_1[_i];
                        result200.push(UnRegUserOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AccountService.prototype.addForiegner = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Account/AddForiegner";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processAddForiegner(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processAddForiegner(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AccountService.prototype.processAddForiegner = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], AccountService);
    return AccountService;
}());

var AuthorService = /** @class */ (function () {
    function AuthorService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }
    AuthorService.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Author/GetAll";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AuthorService.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_2 = resultData200; _i < resultData200_2.length; _i++) {
                        var item = resultData200_2[_i];
                        result200.push(AuthorOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AuthorService.prototype.getById = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Author/GetById?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetById(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetById(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AuthorService.prototype.processGetById = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? AuthorOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AuthorService.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Author/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AuthorService.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AuthorService.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Author/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AuthorService.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? AuthorOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AuthorService.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Author/Delete?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    AuthorService.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], AuthorService);
    return AuthorService;
}());

var BooksService = /** @class */ (function () {
    function BooksService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }
    BooksService.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Books/GetAll";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    BooksService.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_3 = resultData200; _i < resultData200_3.length; _i++) {
                        var item = resultData200_3[_i];
                        result200.push(BookOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    BooksService.prototype.getRare = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Books/GetRare";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetRare(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetRare(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    BooksService.prototype.processGetRare = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_4 = resultData200; _i < resultData200_4.length; _i++) {
                        var item = resultData200_4[_i];
                        result200.push(BookOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    BooksService.prototype.getBookById = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Books/GetBookById?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetBookById(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetBookById(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    BooksService.prototype.processGetBookById = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? BookOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    BooksService.prototype.createBook = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Books/CreateBook";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreateBook(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreateBook(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    BooksService.prototype.processCreateBook = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    BooksService.prototype.updateBook = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Books/UpdateBook";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdateBook(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdateBook(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    BooksService.prototype.processUpdateBook = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? BookOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    BooksService.prototype.deleteBook = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Books/DeleteBook?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDeleteBook(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDeleteBook(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    BooksService.prototype.processDeleteBook = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], BooksService);
    return BooksService;
}());

var CategoryService = /** @class */ (function () {
    function CategoryService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }
    CategoryService.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/Category/GetAll";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CategoryService.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_5 = resultData200; _i < resultData200_5.length; _i++) {
                        var item = resultData200_5[_i];
                        result200.push(CategoryOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    CategoryService.prototype.getById = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Category/GetById?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetById(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetById(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CategoryService.prototype.processGetById = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? CategoryOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    CategoryService.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Category/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CategoryService.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    CategoryService.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Category/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CategoryService.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? CategoryOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    CategoryService.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/Category/Delete?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    CategoryService.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], CategoryService);
    return CategoryService;
}());

var GovernmentPublicationsService = /** @class */ (function () {
    function GovernmentPublicationsService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }
    GovernmentPublicationsService.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/GovernmentPublications/GetAll";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GovernmentPublicationsService.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_6 = resultData200; _i < resultData200_6.length; _i++) {
                        var item = resultData200_6[_i];
                        result200.push(GovtPublicationOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    GovernmentPublicationsService.prototype.getRare = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/GovernmentPublications/GetRare";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetRare(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetRare(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GovernmentPublicationsService.prototype.processGetRare = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_7 = resultData200; _i < resultData200_7.length; _i++) {
                        var item = resultData200_7[_i];
                        result200.push(GovtPublicationOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    GovernmentPublicationsService.prototype.getById = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/GovernmentPublications/GetById?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetById(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetById(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GovernmentPublicationsService.prototype.processGetById = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? GovtPublicationOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    GovernmentPublicationsService.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/GovernmentPublications/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GovernmentPublicationsService.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    GovernmentPublicationsService.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/GovernmentPublications/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GovernmentPublicationsService.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? GovtPublicationOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    GovernmentPublicationsService.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/GovernmentPublications/Delete?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    GovernmentPublicationsService.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    GovernmentPublicationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], GovernmentPublicationsService);
    return GovernmentPublicationsService;
}());

var NewsPapersService = /** @class */ (function () {
    function NewsPapersService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }
    NewsPapersService.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/NewsPapers/GetAll";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NewsPapersService.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_8 = resultData200; _i < resultData200_8.length; _i++) {
                        var item = resultData200_8[_i];
                        result200.push(NewspaperOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NewsPapersService.prototype.getRare = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/NewsPapers/GetRare";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetRare(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetRare(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NewsPapersService.prototype.processGetRare = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_9 = resultData200; _i < resultData200_9.length; _i++) {
                        var item = resultData200_9[_i];
                        result200.push(NewspaperOutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NewsPapersService.prototype.getById = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/NewsPapers/GetById?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetById(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetById(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NewsPapersService.prototype.processGetById = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? NewspaperOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NewsPapersService.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/NewsPapers/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NewsPapersService.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NewsPapersService.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/NewsPapers/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NewsPapersService.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? NewspaperOutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NewsPapersService.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/NewsPapers/Delete?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    NewsPapersService.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    NewsPapersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], NewsPapersService);
    return NewsPapersService;
}());

var OlaLeafsService = /** @class */ (function () {
    function OlaLeafsService(http, baseUrl) {
        this.jsonParseReviver = undefined;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : "https://localhost:5001";
    }
    OlaLeafsService.prototype.getAll = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/OlaLeafs/GetAll";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetAll(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetAll(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    OlaLeafsService.prototype.processGetAll = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_10 = resultData200; _i < resultData200_10.length; _i++) {
                        var item = resultData200_10[_i];
                        result200.push(OlaleafoutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    OlaLeafsService.prototype.getRare = function () {
        var _this = this;
        var url_ = this.baseUrl + "/api/OlaLeafs/GetRare";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetRare(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetRare(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    OlaLeafsService.prototype.processGetRare = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                if (resultData200 && resultData200.constructor === Array) {
                    result200 = [];
                    for (var _i = 0, resultData200_11 = resultData200; _i < resultData200_11.length; _i++) {
                        var item = resultData200_11[_i];
                        result200.push(OlaleafoutputDto.fromJS(item));
                    }
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    OlaLeafsService.prototype.getById = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/OlaLeafs/GetById?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Accept": "application/json"
            })
        };
        return this.http.request("get", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processGetById(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processGetById(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    OlaLeafsService.prototype.processGetById = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? OlaleafoutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    OlaLeafsService.prototype.create = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/OlaLeafs/Create";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
            })
        };
        return this.http.request("post", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processCreate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processCreate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    OlaLeafsService.prototype.processCreate = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    OlaLeafsService.prototype.update = function (input) {
        var _this = this;
        var url_ = this.baseUrl + "/api/OlaLeafs/Update";
        url_ = url_.replace(/[?&]$/, "");
        var content_ = JSON.stringify(input);
        var options_ = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };
        return this.http.request("put", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processUpdate(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processUpdate(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    OlaLeafsService.prototype.processUpdate = function (response) {
        var _this = this;
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                var result200 = null;
                var resultData200 = _responseText === "" ? null : JSON.parse(_responseText, _this.jsonParseReviver);
                result200 = resultData200 ? OlaleafoutputDto.fromJS(resultData200) : null;
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result200);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    OlaLeafsService.prototype.delete = function (id) {
        var _this = this;
        var url_ = this.baseUrl + "/api/OlaLeafs/Delete?";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined and cannot be null.");
        else
            url_ += "id=" + encodeURIComponent("" + id) + "&";
        url_ = url_.replace(/[?&]$/, "");
        var options_ = {
            observe: "response",
            responseType: "blob",
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({})
        };
        return this.http.request("delete", url_, options_).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (response_) {
            return _this.processDelete(response_);
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (response_) {
            if (response_ instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponseBase"]) {
                try {
                    return _this.processDelete(response_);
                }
                catch (e) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(e);
                }
            }
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(response_);
        }));
    };
    OlaLeafsService.prototype.processDelete = function (response) {
        var status = response.status;
        var responseBlob = response instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpResponse"] ? response.body :
            response.error instanceof Blob ? response.error : undefined;
        var _headers = {};
        if (response.headers) {
            for (var _i = 0, _a = response.headers.keys(); _i < _a.length; _i++) {
                var key = _a[_i];
                _headers[key] = response.headers.get(key);
            }
        }
        ;
        if (status === 200) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
        }
        else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_responseText) {
                return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    OlaLeafsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(API_BASE_URL)),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], String])
    ], OlaLeafsService);
    return OlaLeafsService;
}());

var UserRegisterInputDto = /** @class */ (function () {
    function UserRegisterInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UserRegisterInputDto.prototype.init = function (data) {
        if (data) {
            this.userName = data["userName"];
            this.emailAddress = data["emailAddress"];
            this.password = data["password"];
            this.nationalId = data["nationalId"];
        }
    };
    UserRegisterInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UserRegisterInputDto();
        result.init(data);
        return result;
    };
    UserRegisterInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["userName"] = this.userName;
        data["emailAddress"] = this.emailAddress;
        data["password"] = this.password;
        data["nationalId"] = this.nationalId;
        return data;
    };
    UserRegisterInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UserRegisterInputDto();
        result.init(json);
        return result;
    };
    return UserRegisterInputDto;
}());

var UnRegUserOutputDto = /** @class */ (function () {
    function UnRegUserOutputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    UnRegUserOutputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.userName = data["userName"];
            this.email = data["email"];
            this.isActive = data["isActive"];
        }
    };
    UnRegUserOutputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new UnRegUserOutputDto();
        result.init(data);
        return result;
    };
    UnRegUserOutputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["userName"] = this.userName;
        data["email"] = this.email;
        data["isActive"] = this.isActive;
        return data;
    };
    UnRegUserOutputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new UnRegUserOutputDto();
        result.init(json);
        return result;
    };
    return UnRegUserOutputDto;
}());

var AddForiegnerInputDto = /** @class */ (function () {
    function AddForiegnerInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AddForiegnerInputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
        }
    };
    AddForiegnerInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AddForiegnerInputDto();
        result.init(data);
        return result;
    };
    AddForiegnerInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        return data;
    };
    AddForiegnerInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AddForiegnerInputDto();
        result.init(json);
        return result;
    };
    return AddForiegnerInputDto;
}());

var AuthorOutputDto = /** @class */ (function () {
    function AuthorOutputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthorOutputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.displayName = data["displayName"];
            this.age = data["age"];
            this.emailAddress = data["emailAddress"];
        }
    };
    AuthorOutputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthorOutputDto();
        result.init(data);
        return result;
    };
    AuthorOutputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        data["age"] = this.age;
        data["emailAddress"] = this.emailAddress;
        return data;
    };
    AuthorOutputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthorOutputDto();
        result.init(json);
        return result;
    };
    return AuthorOutputDto;
}());

var AuthorInputDto = /** @class */ (function () {
    function AuthorInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthorInputDto.prototype.init = function (data) {
        if (data) {
            this.displayName = data["displayName"];
            this.age = data["age"];
            this.emailAddress = data["emailAddress"];
        }
    };
    AuthorInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthorInputDto();
        result.init(data);
        return result;
    };
    AuthorInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        data["age"] = this.age;
        data["emailAddress"] = this.emailAddress;
        return data;
    };
    AuthorInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthorInputDto();
        result.init(json);
        return result;
    };
    return AuthorInputDto;
}());

var AuthorUpdateDto = /** @class */ (function () {
    function AuthorUpdateDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    AuthorUpdateDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.displayName = data["displayName"];
            this.age = data["age"];
            this.emailAddress = data["emailAddress"];
        }
    };
    AuthorUpdateDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new AuthorUpdateDto();
        result.init(data);
        return result;
    };
    AuthorUpdateDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        data["age"] = this.age;
        data["emailAddress"] = this.emailAddress;
        return data;
    };
    AuthorUpdateDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new AuthorUpdateDto();
        result.init(json);
        return result;
    };
    return AuthorUpdateDto;
}());

var BookOutputDto = /** @class */ (function () {
    function BookOutputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    BookOutputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.isbnNumber = data["isbnNumber"];
            this.totalPages = data["totalPages"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? AuthorOutputDto.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? CategoryOutputDto.fromJS(data["category"]) : undefined;
        }
    };
    BookOutputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new BookOutputDto();
        result.init(data);
        return result;
    };
    BookOutputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["isbnNumber"] = this.isbnNumber;
        data["totalPages"] = this.totalPages;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    BookOutputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new BookOutputDto();
        result.init(json);
        return result;
    };
    return BookOutputDto;
}());

var SourceType;
(function (SourceType) {
    SourceType[SourceType["Available"] = 10] = "Available";
    SourceType[SourceType["Rare"] = 20] = "Rare";
})(SourceType || (SourceType = {}));
var CategoryOutputDto = /** @class */ (function () {
    function CategoryOutputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CategoryOutputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.displayName = data["displayName"];
        }
    };
    CategoryOutputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CategoryOutputDto();
        result.init(data);
        return result;
    };
    CategoryOutputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        return data;
    };
    CategoryOutputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CategoryOutputDto();
        result.init(json);
        return result;
    };
    return CategoryOutputDto;
}());

var BookInputDto = /** @class */ (function () {
    function BookInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    BookInputDto.prototype.init = function (data) {
        if (data) {
            this.isbnNumber = data["isbnNumber"];
            this.totalPages = data["totalPages"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.authorId = data["authorId"];
            this.categoryId = data["categoryId"];
        }
    };
    BookInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new BookInputDto();
        result.init(data);
        return result;
    };
    BookInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["isbnNumber"] = this.isbnNumber;
        data["totalPages"] = this.totalPages;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["authorId"] = this.authorId;
        data["categoryId"] = this.categoryId;
        return data;
    };
    BookInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new BookInputDto();
        result.init(json);
        return result;
    };
    return BookInputDto;
}());

var BookUpdateDto = /** @class */ (function () {
    function BookUpdateDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    BookUpdateDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.isbnNumber = data["isbnNumber"];
            this.totalPages = data["totalPages"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? Author.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? Category.fromJS(data["category"]) : undefined;
        }
    };
    BookUpdateDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new BookUpdateDto();
        result.init(data);
        return result;
    };
    BookUpdateDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["isbnNumber"] = this.isbnNumber;
        data["totalPages"] = this.totalPages;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    BookUpdateDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new BookUpdateDto();
        result.init(json);
        return result;
    };
    return BookUpdateDto;
}());

var AuditedEntity = /** @class */ (function () {
    function AuditedEntity(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
        if (!data) {
            this.isDeleted = false;
        }
    }
    AuditedEntity.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.isDeleted = data["isDeleted"] !== undefined ? data["isDeleted"] : false;
            this.deleterUserId = data["deleterUserId"];
            this.deletedTime = data["deletedTime"] ? new Date(data["deletedTime"].toString()) : undefined;
            this.creatorUserId = data["creatorUserId"];
            this.creationTime = data["creationTime"] ? new Date(data["creationTime"].toString()) : undefined;
            this.lastModificationDate = data["lastModificationDate"] ? new Date(data["lastModificationDate"].toString()) : undefined;
            this.lastModifierUser = data["lastModifierUser"];
        }
    };
    AuditedEntity.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'AuditedEntity' cannot be instantiated.");
    };
    AuditedEntity.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["isDeleted"] = this.isDeleted;
        data["deleterUserId"] = this.deleterUserId;
        data["deletedTime"] = this.deletedTime ? this.deletedTime.toISOString() : undefined;
        data["creatorUserId"] = this.creatorUserId;
        data["creationTime"] = this.creationTime ? this.creationTime.toISOString() : undefined;
        data["lastModificationDate"] = this.lastModificationDate ? this.lastModificationDate.toISOString() : undefined;
        data["lastModifierUser"] = this.lastModifierUser;
        return data;
    };
    AuditedEntity.prototype.clone = function () {
        throw new Error("The abstract class 'AuditedEntity' cannot be instantiated.");
    };
    return AuditedEntity;
}());

var Author = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Author, _super);
    function Author(data) {
        return _super.call(this, data) || this;
    }
    Author.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
        if (data) {
            this.displayName = data["displayName"];
            this.age = data["age"];
            this.emailAddress = data["emailAddress"];
            if (data["books"] && data["books"].constructor === Array) {
                this.books = [];
                for (var _i = 0, _a = data["books"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.books.push(Book.fromJS(item));
                }
            }
        }
    };
    Author.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Author();
        result.init(data);
        return result;
    };
    Author.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        data["age"] = this.age;
        data["emailAddress"] = this.emailAddress;
        if (this.books && this.books.constructor === Array) {
            data["books"] = [];
            for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
                var item = _a[_i];
                data["books"].push(item.toJSON());
            }
        }
        _super.prototype.toJSON.call(this, data);
        return data;
    };
    Author.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Author();
        result.init(json);
        return result;
    };
    return Author;
}(AuditedEntity));

var SourceEntity = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SourceEntity, _super);
    function SourceEntity(data) {
        var _this = _super.call(this, data) || this;
        if (!data) {
            _this.sourceType = SourceType.Available;
        }
        return _this;
    }
    SourceEntity.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
        if (data) {
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"] !== undefined ? data["sourceType"] : SourceType.Available;
            this.authorId = data["authorId"];
            this.categoryId = data["categoryId"];
            this.author = data["author"] ? Author.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? Category.fromJS(data["category"]) : undefined;
        }
    };
    SourceEntity.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        throw new Error("The abstract class 'SourceEntity' cannot be instantiated.");
    };
    SourceEntity.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["authorId"] = this.authorId;
        data["categoryId"] = this.categoryId;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        _super.prototype.toJSON.call(this, data);
        return data;
    };
    SourceEntity.prototype.clone = function () {
        throw new Error("The abstract class 'SourceEntity' cannot be instantiated.");
    };
    return SourceEntity;
}(AuditedEntity));

var Book = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Book, _super);
    function Book(data) {
        return _super.call(this, data) || this;
    }
    Book.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
        if (data) {
            this.isbnNumber = data["isbnNumber"];
            this.totalPages = data["totalPages"];
        }
    };
    Book.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Book();
        result.init(data);
        return result;
    };
    Book.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["isbnNumber"] = this.isbnNumber;
        data["totalPages"] = this.totalPages;
        _super.prototype.toJSON.call(this, data);
        return data;
    };
    Book.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Book();
        result.init(json);
        return result;
    };
    return Book;
}(SourceEntity));

var Category = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Category, _super);
    function Category(data) {
        return _super.call(this, data) || this;
    }
    Category.prototype.init = function (data) {
        _super.prototype.init.call(this, data);
        if (data) {
            this.displayName = data["displayName"];
            if (data["books"] && data["books"].constructor === Array) {
                this.books = [];
                for (var _i = 0, _a = data["books"]; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.books.push(Book.fromJS(item));
                }
            }
        }
    };
    Category.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new Category();
        result.init(data);
        return result;
    };
    Category.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        if (this.books && this.books.constructor === Array) {
            data["books"] = [];
            for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
                var item = _a[_i];
                data["books"].push(item.toJSON());
            }
        }
        _super.prototype.toJSON.call(this, data);
        return data;
    };
    Category.prototype.clone = function () {
        var json = this.toJSON();
        var result = new Category();
        result.init(json);
        return result;
    };
    return Category;
}(AuditedEntity));

var CategoryInputDto = /** @class */ (function () {
    function CategoryInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CategoryInputDto.prototype.init = function (data) {
        if (data) {
            this.displayName = data["displayName"];
        }
    };
    CategoryInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CategoryInputDto();
        result.init(data);
        return result;
    };
    CategoryInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["displayName"] = this.displayName;
        return data;
    };
    CategoryInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CategoryInputDto();
        result.init(json);
        return result;
    };
    return CategoryInputDto;
}());

var CategoryUpdateDto = /** @class */ (function () {
    function CategoryUpdateDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    CategoryUpdateDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.displayName = data["displayName"];
        }
    };
    CategoryUpdateDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new CategoryUpdateDto();
        result.init(data);
        return result;
    };
    CategoryUpdateDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["displayName"] = this.displayName;
        return data;
    };
    CategoryUpdateDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new CategoryUpdateDto();
        result.init(json);
        return result;
    };
    return CategoryUpdateDto;
}());

var GovtPublicationOutputDto = /** @class */ (function () {
    function GovtPublicationOutputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GovtPublicationOutputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.totalPages = data["totalPages"];
            this.sector = data["sector"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? AuthorOutputDto.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? CategoryOutputDto.fromJS(data["category"]) : undefined;
        }
    };
    GovtPublicationOutputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GovtPublicationOutputDto();
        result.init(data);
        return result;
    };
    GovtPublicationOutputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["totalPages"] = this.totalPages;
        data["sector"] = this.sector;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    GovtPublicationOutputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GovtPublicationOutputDto();
        result.init(json);
        return result;
    };
    return GovtPublicationOutputDto;
}());

var GovtPublicationInputDto = /** @class */ (function () {
    function GovtPublicationInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GovtPublicationInputDto.prototype.init = function (data) {
        if (data) {
            this.totalPages = data["totalPages"];
            this.sector = data["sector"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.authorId = data["authorId"];
            this.categoryId = data["categoryId"];
        }
    };
    GovtPublicationInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GovtPublicationInputDto();
        result.init(data);
        return result;
    };
    GovtPublicationInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["totalPages"] = this.totalPages;
        data["sector"] = this.sector;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["authorId"] = this.authorId;
        data["categoryId"] = this.categoryId;
        return data;
    };
    GovtPublicationInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GovtPublicationInputDto();
        result.init(json);
        return result;
    };
    return GovtPublicationInputDto;
}());

var GovtPublicationUpdateDto = /** @class */ (function () {
    function GovtPublicationUpdateDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    GovtPublicationUpdateDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.totalPages = data["totalPages"];
            this.sector = data["sector"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? Author.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? Category.fromJS(data["category"]) : undefined;
        }
    };
    GovtPublicationUpdateDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new GovtPublicationUpdateDto();
        result.init(data);
        return result;
    };
    GovtPublicationUpdateDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["totalPages"] = this.totalPages;
        data["sector"] = this.sector;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    GovtPublicationUpdateDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new GovtPublicationUpdateDto();
        result.init(json);
        return result;
    };
    return GovtPublicationUpdateDto;
}());

var NewspaperOutputDto = /** @class */ (function () {
    function NewspaperOutputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    NewspaperOutputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.publicationDate = data["publicationDate"] ? new Date(data["publicationDate"].toString()) : undefined;
            this.totalSubParts = data["totalSubParts"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? AuthorOutputDto.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? CategoryOutputDto.fromJS(data["category"]) : undefined;
        }
    };
    NewspaperOutputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new NewspaperOutputDto();
        result.init(data);
        return result;
    };
    NewspaperOutputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["publicationDate"] = this.publicationDate ? this.publicationDate.toISOString() : undefined;
        data["totalSubParts"] = this.totalSubParts;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    NewspaperOutputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new NewspaperOutputDto();
        result.init(json);
        return result;
    };
    return NewspaperOutputDto;
}());

var NewspaperInputDto = /** @class */ (function () {
    function NewspaperInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    NewspaperInputDto.prototype.init = function (data) {
        if (data) {
            this.publicationDate = data["publicationDate"] ? new Date(data["publicationDate"].toString()) : undefined;
            this.totalSubParts = data["totalSubParts"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.authorId = data["authorId"];
            this.categoryId = data["categoryId"];
        }
    };
    NewspaperInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new NewspaperInputDto();
        result.init(data);
        return result;
    };
    NewspaperInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["publicationDate"] = this.publicationDate ? this.publicationDate.toISOString() : undefined;
        data["totalSubParts"] = this.totalSubParts;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["authorId"] = this.authorId;
        data["categoryId"] = this.categoryId;
        return data;
    };
    NewspaperInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new NewspaperInputDto();
        result.init(json);
        return result;
    };
    return NewspaperInputDto;
}());

var NewspaperUpdateDto = /** @class */ (function () {
    function NewspaperUpdateDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    NewspaperUpdateDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.publicationDate = data["publicationDate"] ? new Date(data["publicationDate"].toString()) : undefined;
            this.totalSubParts = data["totalSubParts"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? Author.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? Category.fromJS(data["category"]) : undefined;
        }
    };
    NewspaperUpdateDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new NewspaperUpdateDto();
        result.init(data);
        return result;
    };
    NewspaperUpdateDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["publicationDate"] = this.publicationDate ? this.publicationDate.toISOString() : undefined;
        data["totalSubParts"] = this.totalSubParts;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    NewspaperUpdateDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new NewspaperUpdateDto();
        result.init(json);
        return result;
    };
    return NewspaperUpdateDto;
}());

var OlaleafoutputDto = /** @class */ (function () {
    function OlaleafoutputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    OlaleafoutputDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.description = data["description"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? AuthorOutputDto.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? CategoryOutputDto.fromJS(data["category"]) : undefined;
        }
    };
    OlaleafoutputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new OlaleafoutputDto();
        result.init(data);
        return result;
    };
    OlaleafoutputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["description"] = this.description;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    OlaleafoutputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new OlaleafoutputDto();
        result.init(json);
        return result;
    };
    return OlaleafoutputDto;
}());

var OlaLeafInputDto = /** @class */ (function () {
    function OlaLeafInputDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    OlaLeafInputDto.prototype.init = function (data) {
        if (data) {
            this.description = data["description"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.authorId = data["authorId"];
            this.categoryId = data["categoryId"];
        }
    };
    OlaLeafInputDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new OlaLeafInputDto();
        result.init(data);
        return result;
    };
    OlaLeafInputDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["description"] = this.description;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["authorId"] = this.authorId;
        data["categoryId"] = this.categoryId;
        return data;
    };
    OlaLeafInputDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new OlaLeafInputDto();
        result.init(json);
        return result;
    };
    return OlaLeafInputDto;
}());

var OlaleafUpdateDto = /** @class */ (function () {
    function OlaleafUpdateDto(data) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }
    OlaleafUpdateDto.prototype.init = function (data) {
        if (data) {
            this.id = data["id"];
            this.description = data["description"];
            this.displayName = data["displayName"];
            this.publisher = data["publisher"];
            this.year = data["year"] ? new Date(data["year"].toString()) : undefined;
            this.price = data["price"];
            this.sourceType = data["sourceType"];
            this.author = data["author"] ? Author.fromJS(data["author"]) : undefined;
            this.category = data["category"] ? Category.fromJS(data["category"]) : undefined;
        }
    };
    OlaleafUpdateDto.fromJS = function (data) {
        data = typeof data === 'object' ? data : {};
        var result = new OlaleafUpdateDto();
        result.init(data);
        return result;
    };
    OlaleafUpdateDto.prototype.toJSON = function (data) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["description"] = this.description;
        data["displayName"] = this.displayName;
        data["publisher"] = this.publisher;
        data["year"] = this.year ? this.year.toISOString() : undefined;
        data["price"] = this.price;
        data["sourceType"] = this.sourceType;
        data["author"] = this.author ? this.author.toJSON() : undefined;
        data["category"] = this.category ? this.category.toJSON() : undefined;
        return data;
    };
    OlaleafUpdateDto.prototype.clone = function () {
        var json = this.toJSON();
        var result = new OlaleafUpdateDto();
        result.init(json);
        return result;
    };
    return OlaleafUpdateDto;
}());

var SwaggerException = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SwaggerException, _super);
    function SwaggerException(message, status, response, headers, result) {
        var _this = _super.call(this) || this;
        _this.isSwaggerException = true;
        _this.message = message;
        _this.status = status;
        _this.response = response;
        _this.headers = headers;
        _this.result = result;
        return _this;
    }
    SwaggerException.isSwaggerException = function (obj) {
        return obj.isSwaggerException === true;
    };
    return SwaggerException;
}(Error));

function throwException(message, status, response, headers, result) {
    if (result !== null && result !== undefined)
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(result);
    else
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(new SwaggerException(message, status, response, headers, null));
}
function blobToText(blob) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
        if (!blob) {
            observer.next("");
            observer.complete();
        }
        else {
            var reader = new FileReader();
            reader.onload = function (event) {
                observer.next(event.target.result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\LibraryApplication\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map