import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { BookUpdateDto, BooksService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
var RareBooksEditComponent = /** @class */ (function () {
    function RareBooksEditComponent(_bookService, dialogRef, _authorService, _categoryService, jwtHelper, book) {
        this._bookService = _bookService;
        this.dialogRef = dialogRef;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.jwtHelper = jwtHelper;
        this.book = book;
        this.authors = [];
        this.categories = [];
        this.canType = false;
    }
    RareBooksEditComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    RareBooksEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._authorService.getAll().subscribe(function (res) {
            _this.authors = res;
        });
        this._categoryService.getAll().subscribe(function (res) {
            _this.categories = res;
        });
        var token = localStorage.getItem('token');
        var decodeToken = this.jwtHelper.decodeToken(token);
        if (decodeToken['permission'].includes("books.rare")) {
            if (decodeToken['role'] == 'Librarian') {
                this.canType = false;
            }
            else {
                this.canType = true;
            }
        }
    };
    RareBooksEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._bookService.updateBook(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    RareBooksEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rare-books-edit',
            templateUrl: './rare-books-edit.component.html',
            styleUrls: ['./rare-books-edit.component.css']
        }),
        tslib_1.__param(5, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [BooksService,
            MatDialogRef,
            AuthorService,
            CategoryService,
            JwtHelperService,
            BookUpdateDto])
    ], RareBooksEditComponent);
    return RareBooksEditComponent;
}());
export { RareBooksEditComponent };
//# sourceMappingURL=rare-books-edit.component.js.map