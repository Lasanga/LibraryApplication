import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { NewspaperInputDto, NewsPapersService, AuthorService, CategoryService } from 'src/app/shared-services/shared-services.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
var NewsPaperCreateComponent = /** @class */ (function () {
    function NewsPaperCreateComponent(dialogRef, token, _newsService, _authorService, _categoryService) {
        this.dialogRef = dialogRef;
        this.token = token;
        this._newsService = _newsService;
        this._authorService = _authorService;
        this._categoryService = _categoryService;
        this.authors = [];
        this.categories = [];
        this.newsPaper = new NewspaperInputDto();
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
    NewsPaperCreateComponent = tslib_1.__decorate([
        Component({
            selector: 'app-news-paper-create',
            templateUrl: './news-paper-create.component.html',
            styleUrls: ['./news-paper-create.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, NewsPapersService,
            AuthorService,
            CategoryService])
    ], NewsPaperCreateComponent);
    return NewsPaperCreateComponent;
}());
export { NewsPaperCreateComponent };
//# sourceMappingURL=news-paper-create.component.js.map