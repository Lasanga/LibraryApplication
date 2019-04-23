import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { NewsPapersService, AuthorService, CategoryService, NewspaperUpdateDto } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { JwtHelperService } from '@auth0/angular-jwt';
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
        if (decodeToken['permission'].includes("newspaper.rare")) {
            if (decodeToken['role'] == 'Librarian') {
                this.canType = false;
            }
            else {
                this.canType = true;
            }
        }
    };
    NewsPaperEditComponent.prototype.onSubmit = function (data) {
        var _this = this;
        data.year = new Date('August 19, 2019 23:15:30');
        data.publicationDate = new Date('August 19, 2019 23:15:30');
        this._newsService.update(data).subscribe(function (res) {
            _this.dialogRef.close();
            location.reload();
        });
    };
    NewsPaperEditComponent = tslib_1.__decorate([
        Component({
            selector: 'app-news-paper-edit',
            templateUrl: './news-paper-edit.component.html',
            styleUrls: ['./news-paper-edit.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef,
            NewspaperUpdateDto,
            NewsPapersService,
            AuthorService,
            CategoryService,
            JwtHelperService])
    ], NewsPaperEditComponent);
    return NewsPaperEditComponent;
}());
export { NewsPaperEditComponent };
//# sourceMappingURL=news-paper-edit.component.js.map