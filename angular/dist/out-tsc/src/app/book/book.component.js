import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BooksService } from '../shared-services/shared-services.component';
import { MatDialog } from '@angular/material';
import { BookEditComponent } from './book-edit/book-edit.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BookCreateComponent } from './book-create/book-create.component';
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
        var dialogRef = this.dialog.open(BookEditComponent, {
            width: '800px',
            data: { data: book }
        });
    };
    BookComponent.prototype.openCreate = function () {
        var dialogRef = this.dialog.open(BookCreateComponent, {
            width: '800px'
        });
    };
    BookComponent = tslib_1.__decorate([
        Component({
            selector: 'app-book',
            templateUrl: './book.component.html',
            styleUrls: ['./book.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JwtHelperService,
            BooksService,
            MatDialog])
    ], BookComponent);
    return BookComponent;
}());
export { BookComponent };
//# sourceMappingURL=book.component.js.map