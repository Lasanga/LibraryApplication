import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { BookInputDto, BooksService, AuthorService, CategoryService } from '../../shared-services/shared-services.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var BookCreateComponent = /** @class */ (function () {
    function BookCreateComponent(dialogRef, token, _bookService, _authorService, _categoryService) {
        this.dialogRef = dialogRef;
        this.token = token;
        this._bookService = _bookService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.authors = [];
        this.categories = [];
        this.book = new BookInputDto();
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
    BookCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-book-create',
            templateUrl: './book-create.component.html',
            styleUrls: ['./book-create.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, BooksService,
            AuthorService,
            CategoryService])
    ], BookCreateComponent);
    return BookCreateComponent;
}());
export { BookCreateComponent };
//# sourceMappingURL=book-create.component.js.map