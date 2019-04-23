import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BooksService, AuthorService, CategoryService, BookUpdateDto } from 'src/app/shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
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
        if (decodeToken['permission'].includes("books.rare")) {
            if (decodeToken['role'] == 'Librarian') {
                this.canType = false;
            }
            else {
                this.canType = true;
            }
        }
    };
    BookEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        this._bookService.updateBook(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    BookEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-book-edit',
            templateUrl: './book-edit.component.html',
            styleUrls: ['./book-edit.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef,
            BookUpdateDto,
            BooksService,
            AuthorService,
            CategoryService,
            JwtHelperService])
    ], BookEditComponent);
    return BookEditComponent;
}());
export { BookEditComponent };
//# sourceMappingURL=book-edit.component.js.map