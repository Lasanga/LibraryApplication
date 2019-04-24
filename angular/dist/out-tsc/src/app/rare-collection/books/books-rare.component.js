import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared-services/shared-services.component';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatDialog } from '@angular/material';
import { RareBooksEditComponent } from './rare-books-edit/rare-books-edit.component';
var BooksRareComponent = /** @class */ (function () {
    function BooksRareComponent(_bookService, jwtHelper, dialog) {
        this._bookService = _bookService;
        this.jwtHelper = jwtHelper;
        this.dialog = dialog;
        this.bookOutputDto = [];
        this.canEdit = false;
        this.canDelete = false;
    }
    BooksRareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bookService.getRare().subscribe(function (res) {
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
    };
    BooksRareComponent.prototype.option = function (element) {
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
    BooksRareComponent.prototype.openDialog = function (book) {
        var dialogRef = this.dialog.open(RareBooksEditComponent, {
            width: '800px',
            data: { data: book }
        });
    };
    BooksRareComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rare-books',
            templateUrl: './books-rare.component.html',
            styleUrls: ['./books-rare.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BooksService,
            JwtHelperService,
            MatDialog])
    ], BooksRareComponent);
    return BooksRareComponent;
}());
export { BooksRareComponent };
//# sourceMappingURL=books-rare.component.js.map